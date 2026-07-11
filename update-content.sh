#!/bin/bash
set -e

BASE="https://aptiskey.com"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$SCRIPT_DIR/public/crawled_data"

# Create directories (no html dir needed)
mkdir -p "$OUT/js" "$OUT/css" "$OUT/images/assets/img" "$OUT/images/speaking/part2" "$OUT/images/speaking/part3" "$OUT/images/meolisteningcau15" "$OUT/audio"

# Always download the latest copy. The origin's Last-Modified header is not
# reliable, so conditional requests (-z) can incorrectly keep stale files.
# Download to a temporary file first to avoid corrupting a good local copy
# when a request fails, then atomically overwrite the destination.
dl() {
  local url="$1"
  local dest="$2"
  local tmp="${dest}.tmp"

  mkdir -p "$(dirname "$dest")"

  if curl -sS -fL \
      -H "Cache-Control: no-cache" \
      --retry 2 \
      "$url" -o "$tmp"; then
    mv -f "$tmp" "$dest"
  else
    rm -f "$tmp"
    echo "  WARNING: failed to download $url" >&2
  fi
}

# ============================================================
# 1. JS DATA FILES
# ============================================================
echo "=== [1/5] DOWNLOADING PUBLIC JS DATA FILES ==="

# Common JS
dl "$BASE/js/common.js" "$OUT/js/js_common.js" &
dl "$BASE/js/home.js" "$OUT/js/js_home.js" &
dl "$BASE/js/donate.js" "$OUT/js/js_donate.js" &
dl "$BASE/js/adminlte/adminlte.js" "$OUT/js/js_adminlte.js" &
wait

# Reading question JS
for f in reading_question1 reading_question2 reading_question4 reading_question5 reading_question5_meo; do
  dl "$BASE/js/reading_question/${f}.js" "$OUT/js/js_reading_question_${f}.js" &
done
wait

# Reading question cu JS
for f in reading_question_cu1 reading_question_cu2 reading_question_cu4 reading_question_cu5; do
  dl "$BASE/js/reading_question_cu/${f}.js" "$OUT/js/js_reading_question_cu_${f}.js" &
done
wait

# Reading key JS 001-012
for i in $(seq -f "%03g" 1 12); do
  dl "$BASE/js/reading/readingkey${i}.js" "$OUT/js/js_reading_readingkey${i}.js" &
done
wait
echo "  Reading JS done"

# Listening question JS
for f in listening_question1_13 listening_question14 listening_question15 listening_question16_17 listening_meo_cau15_method2; do
  dl "$BASE/js/listening_question/${f}.js" "$OUT/js/js_listening_question_${f}.js" &
done
wait

# Listening key JS 001-015
for i in $(seq -f "%03g" 1 15); do
  dl "$BASE/js/listening/listeningkey${i}.js" "$OUT/js/js_listening_listeningkey${i}.js" &
done
wait
echo "  Listening JS done"

# Writing key JS 001-040
count=0
for i in $(seq -f "%03g" 1 40); do
  dl "$BASE/js/writing/writingkey${i}.js" "$OUT/js/js_writing_writingkey${i}.js" &
  count=$((count+1))
  if [ $((count % 10)) -eq 0 ]; then wait; fi
done
wait
echo "  Writing JS done"

# Speaking JS
for f in speaking_question1 speaking_question1_practice speaking_question1_total \
         speaking_question2 speaking_question2_practice speaking_question2_meo \
         speaking_question3 speaking_question3_practice \
         speaking_question4 speaking_question4_practice speaking_question4_total; do
  dl "$BASE/js/speaking/${f}.js" "$OUT/js/js_speaking_${f}.js" &
done
wait
echo "  Speaking JS done"

# Grammar key JS 001-009
for i in $(seq -f "%03g" 1 9); do
  dl "$BASE/js/grammar/grammar_key${i}.js" "$OUT/js/js_grammar_grammar_key${i}.js" &
done
wait
echo "  Grammar JS done"

# ============================================================
# 2. CSS FILES
# ============================================================
echo "=== [2/5] DOWNLOADING CSS ==="
dl "$BASE/css/adminlte/adminlte.css" "$OUT/css/adminlte.css" &
dl "$BASE/css/readingkey.css" "$OUT/css/css_readingkey.css" &
dl "$BASE/css/listeningkey.css" "$OUT/css/css_listeningkey.css" &
wait
echo "  CSS done"

# ============================================================
# 3. IMAGES
# ============================================================
echo "=== [3/5] DOWNLOADING IMAGES ==="
# Avatars/assets
for f in AdminLTELogo.png avatar.png avatar3.png avatar4.png avatar5.png; do
  dl "$BASE/images/assets/img/$f" "$OUT/images/assets/img/$f" &
done
dl "$BASE/images/favicon.ico" "$OUT/images/favicon.ico" &
dl "$BASE/images/aptis-preview.jpg" "$OUT/images/aptis-preview.jpg" &
dl "$BASE/images/Logo.png" "$OUT/images/Logo.png" &
wait

# Speaking part2 (1-37 + tip)
for i in $(seq 1 37); do
  dl "$BASE/images/speaking/part2/$i.png" "$OUT/images/speaking/part2/$i.png" &
  if [ $((i % 10)) -eq 0 ]; then wait; fi
done
dl "$BASE/images/speaking/part2/tip.png" "$OUT/images/speaking/part2/tip.png" &
wait
echo "  Speaking part2 images done"

# Speaking part3 (de01-de25 x _1,_2)
for i in $(seq -f "%02g" 1 25); do
  dl "$BASE/images/speaking/part3/de${i}_1.png" "$OUT/images/speaking/part3/de${i}_1.png" &
  dl "$BASE/images/speaking/part3/de${i}_2.png" "$OUT/images/speaking/part3/de${i}_2.png" &
  if [ $((10#$i % 5)) -eq 0 ]; then wait; fi
done
wait
echo "  Speaking part3 images done"

# Listening meo images (meocau1-17)
for i in $(seq 1 17); do
  dl "$BASE/images/meolisteningcau15/meocau$i.png" "$OUT/images/meolisteningcau15/meocau$i.png" &
done
wait
echo "  Listening meo images done"

# ============================================================
# 4. AUDIO FILES
# ============================================================
echo "=== [4/5] DOWNLOADING AUDIO FILES (this takes a while) ==="

# Extract all audio URLs from JS files
grep -rohP 'audioUrl:\s*"([^"]+\.mp3)"' "$OUT/js/" 2>/dev/null | sed 's/audioUrl: *"//;s/"//' | sort -u > /tmp/public_audio_urls.txt
total_audio=$(wc -l < /tmp/public_audio_urls.txt)
echo "  Found $total_audio audio files to download"

count=0
while IFS= read -r audio_path; do
  dir="$OUT/audio/$(dirname "$audio_path")"
  mkdir -p "$dir"
  audio_url="$BASE/$audio_path"
  # listeningkey012 points at question17, but the origin stores this file
  # under question16. Keep the local path expected by the crawled JS.
  if [ "$audio_path" = "audio/question17/2_scientist_biography_verson1.mp3" ]; then
    audio_url="$BASE/audio/question16/2_scientist_biography_verson1.mp3"
  fi
  dl "$audio_url" "$OUT/audio/$audio_path" &
  count=$((count+1))
  if [ $((count % 15)) -eq 0 ]; then
    wait
    echo "  Audio: $count/$total_audio"
  fi
done < /tmp/public_audio_urls.txt
wait
echo "  Audio: $count/$total_audio done"

# ============================================================
# 5. EXAM REVIEWS
# ============================================================
echo "=== [5/6] DOWNLOADING APPROVED EXAM REVIEWS ==="
if command -v node >/dev/null 2>&1; then
  node "$SCRIPT_DIR/scripts/fetch-exam-reviews.mjs"
else
  echo "  WARNING: Node.js is required to update exam reviews" >&2
fi

# ============================================================
# 6. CLEANUP & VERIFY
# ============================================================
echo "=== [6/6] CLEANUP & VERIFY ==="
# Remove error pages from JS if any
for f in "$OUT"/js/*; do
  if head -3 "$f" 2>/dev/null | grep -qi "403\|404\|forbidden\|DOCTYPE html"; then
    rm -f "$f"
  fi
done

echo ""
echo "=========================================="
echo "      UPDATE COMPLETE (COOKIE-FREE)"
echo "=========================================="
echo "JS:     $(find "$OUT/js" -type f | wc -l) files"
echo "CSS:    $(find "$OUT/css" -type f | wc -l) files"
echo "Images: $(find "$OUT/images" -type f | wc -l) files"
echo "Audio:  $(find "$OUT/audio" -type f | wc -l) files"
echo ""
du -sh "$OUT"
