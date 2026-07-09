#!/bin/bash
set -e

COOKIE="auth_token="
BASE="https://aptiskey.com"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$SCRIPT_DIR/public/crawled_data"

mkdir -p "$OUT/html" "$OUT/js" "$OUT/css" "$OUT/images/assets/img" "$OUT/images/speaking/part2" "$OUT/images/speaking/part3" "$OUT/images/meolisteningcau15" "$OUT/audio"

# ============================================================
# 1. HTML PAGES
# ============================================================
echo "=== [1/6] DOWNLOADING HTML PAGES ==="
PAGES=(
  home.html reading_bode.html reading_question.html reading_meo.html
  reading_question1.html reading_question2.html reading_question4.html reading_question5.html reading_question5_meo.html
  listening_question.html listening_question1_13.html listening_question14.html listening_question15.html listening_question16_17.html
  listening_bode.html listening_meo.html listening_meo_cau15.html listening_meo_cau15_method2.html
  writing_bode.html writing_meo.html
  speaking_question.html speaking_question1.html speaking_question1_practice.html speaking_question1_total.html
  speaking_question2.html speaking_question2_practice.html speaking_question2_meo.html
  speaking_question3.html speaking_question3_practice.html
  speaking_question4.html speaking_question4_practice.html speaking_question4_total.html
  speaking_meo.html
  donate.html guidevideo.html exam-review.html grammar_bode.html grammar_meo.html
  reading_question_cu.html logic-diem_aptis.html profile.html login.html giahan.html
)
# Reading bode keys 001-012
for i in $(seq -f "%03g" 1 12); do PAGES+=("reading${i}.html"); done
# Listening keys 001-015
for i in $(seq -f "%03g" 1 15); do PAGES+=("listeningkey${i}.html"); done
# Writing keys 001-040
for i in $(seq -f "%03g" 1 40); do PAGES+=("writingkey${i}.html"); done
# Grammar keys 001-009
for i in $(seq -f "%03g" 1 9); do PAGES+=("grammar_key${i}.html"); done
# Reading question cu
PAGES+=(reading_question_cu1.html reading_question_cu2.html reading_question_cu4.html reading_question_cu5.html)

total=${#PAGES[@]}
count=0
for page in "${PAGES[@]}"; do
  count=$((count+1))
  curl -s -b "$COOKIE" "$BASE/$page" -o "$OUT/html/$page" &
  if [ $((count % 15)) -eq 0 ]; then wait; echo "  HTML: $count/$total"; fi
done
wait
echo "  HTML: $count/$total done"

# ============================================================
# 2. JS DATA FILES
# ============================================================
echo "=== [2/6] DOWNLOADING JS FILES ==="

# Common JS
curl -s -b "$COOKIE" "$BASE/js/common.js" -o "$OUT/js/js_common.js" &
curl -s -b "$COOKIE" "$BASE/js/home.js" -o "$OUT/js/js_home.js" &
curl -s -b "$COOKIE" "$BASE/js/donate.js" -o "$OUT/js/js_donate.js" &
curl -s -b "$COOKIE" "$BASE/js/adminlte/adminlte.js" -o "$OUT/js/js_adminlte.js" &
wait

# Reading question JS
for f in reading_question1 reading_question2 reading_question4 reading_question5 reading_question5_meo; do
  curl -s -b "$COOKIE" "$BASE/js/reading_question/${f}.js" -o "$OUT/js/js_reading_question_${f}.js" &
done
wait

# Reading question cu JS
for f in reading_question_cu1 reading_question_cu2 reading_question_cu4 reading_question_cu5; do
  curl -s -b "$COOKIE" "$BASE/js/reading_question_cu/${f}.js" -o "$OUT/js/js_reading_question_cu_${f}.js" &
done
wait

# Reading key JS 001-012
for i in $(seq -f "%03g" 1 12); do
  curl -s -b "$COOKIE" "$BASE/js/reading/readingkey${i}.js" -o "$OUT/js/js_reading_readingkey${i}.js" &
done
wait
echo "  Reading JS done"

# Listening question JS
for f in listening_question1_13 listening_question14 listening_question15 listening_question16_17 listening_meo_cau15_method2; do
  curl -s -b "$COOKIE" "$BASE/js/listening_question/${f}.js" -o "$OUT/js/js_listening_question_${f}.js" &
done
wait

# Listening key JS 001-015
for i in $(seq -f "%03g" 1 15); do
  curl -s -b "$COOKIE" "$BASE/js/listening/listeningkey${i}.js" -o "$OUT/js/js_listening_listeningkey${i}.js" &
done
wait
echo "  Listening JS done"

# Writing key JS 001-040
count=0
for i in $(seq -f "%03g" 1 40); do
  curl -s -b "$COOKIE" "$BASE/js/writing/writingkey${i}.js" -o "$OUT/js/js_writing_writingkey${i}.js" &
  count=$((count+1))
  if [ $((count % 10)) -eq 0 ]; then wait; fi
done
wait
echo "  Writing JS done"

# Speaking JS
for f in speaking_question1 speaking_question1_practice speaking_question1_total \
         speaking_question2 speaking_question2_practice speaking_question2_meo \
         speaking_question3 speaking_question3_practice \
         speaking_question4 speaking_question4_practice speaking_question4_total \
         speaking_meo; do
  curl -s -b "$COOKIE" "$BASE/js/speaking/${f}.js" -o "$OUT/js/js_speaking_${f}.js" &
done
wait
echo "  Speaking JS done"

# Grammar key JS 001-009
for i in $(seq -f "%03g" 1 9); do
  curl -s -b "$COOKIE" "$BASE/js/grammar/grammar_key${i}.js" -o "$OUT/js/js_grammar_grammar_key${i}.js" &
done
wait
echo "  Grammar JS done"

# ============================================================
# 3. CSS FILES
# ============================================================
echo "=== [3/6] DOWNLOADING CSS ==="
curl -s -b "$COOKIE" "$BASE/css/adminlte/adminlte.css" -o "$OUT/css/adminlte.css" &
curl -s -b "$COOKIE" "$BASE/css/readingkey.css" -o "$OUT/css/css_readingkey.css" &
curl -s -b "$COOKIE" "$BASE/css/listeningkey.css" -o "$OUT/css/css_listeningkey.css" &
wait
echo "  CSS done"

# ============================================================
# 4. IMAGES
# ============================================================
echo "=== [4/6] DOWNLOADING IMAGES ==="
# Avatars/assets
for f in AdminLTELogo.png avatar.png avatar3.png avatar4.png avatar5.png; do
  curl -s -b "$COOKIE" "$BASE/images/assets/img/$f" -o "$OUT/images/assets/img/$f" &
done
curl -s -b "$COOKIE" "$BASE/images/favicon.ico" -o "$OUT/images/favicon.ico" &
curl -s -b "$COOKIE" "$BASE/images/aptis-preview.jpg" -o "$OUT/images/aptis-preview.jpg" &
curl -s -b "$COOKIE" "$BASE/images/Logo.png" -o "$OUT/images/Logo.png" &
wait

# Speaking part2 (1-37 + tip)
for i in $(seq 1 37); do
  curl -s -b "$COOKIE" "$BASE/images/speaking/part2/$i.png" -o "$OUT/images/speaking/part2/$i.png" &
  if [ $((i % 10)) -eq 0 ]; then wait; fi
done
curl -s -b "$COOKIE" "$BASE/images/speaking/part2/tip.png" -o "$OUT/images/speaking/part2/tip.png" &
wait
echo "  Speaking part2 images done"

# Speaking part3 (de01-de25 x _1,_2)
for i in $(seq -f "%02g" 1 25); do
  curl -s -b "$COOKIE" "$BASE/images/speaking/part3/de${i}_1.png" -o "$OUT/images/speaking/part3/de${i}_1.png" &
  curl -s -b "$COOKIE" "$BASE/images/speaking/part3/de${i}_2.png" -o "$OUT/images/speaking/part3/de${i}_2.png" &
  if [ $((i % 5)) -eq 0 ]; then wait; fi
done
wait
echo "  Speaking part3 images done"

# Listening meo images (meocau1-17)
for i in $(seq 1 17); do
  curl -s -b "$COOKIE" "$BASE/images/meolisteningcau15/meocau$i.png" -o "$OUT/images/meolisteningcau15/meocau$i.png" &
done
wait
echo "  Listening meo images done"

# ============================================================
# 5. AUDIO FILES
# ============================================================
echo "=== [5/6] DOWNLOADING AUDIO FILES (this takes a while) ==="

# Extract all audio URLs from JS files (we need JS first)
grep -rohP 'audioUrl:\s*"([^"]+\.mp3)"' "$OUT/js/" 2>/dev/null | sed 's/audioUrl: *"//;s/"//' | sort -u > /tmp/audio_urls.txt
total_audio=$(wc -l < /tmp/audio_urls.txt)
echo "  Found $total_audio audio files to download"

count=0
while IFS= read -r audio_path; do
  dir="$OUT/audio/$(dirname "$audio_path")"
  mkdir -p "$dir"
  curl -s -b "$COOKIE" "$BASE/$audio_path" -o "$OUT/audio/$audio_path" &
  count=$((count+1))
  if [ $((count % 15)) -eq 0 ]; then
    wait
    echo "  Audio: $count/$total_audio"
  fi
done < /tmp/audio_urls.txt
wait
echo "  Audio: $count/$total_audio done"

# ============================================================
# 6. CLEANUP & VERIFY
# ============================================================
echo "=== [6/6] CLEANUP & VERIFY ==="
# Remove error pages from JS
for f in "$OUT"/js/*; do
  if head -3 "$f" 2>/dev/null | grep -qi "403\|404\|forbidden\|DOCTYPE html"; then
    rm -f "$f"
  fi
done

echo ""
echo "=========================================="
echo "      CRAWL COMPLETE"
echo "=========================================="
echo "HTML:   $(find "$OUT/html" -type f | wc -l) files"
echo "JS:     $(find "$OUT/js" -type f | wc -l) files"
echo "CSS:    $(find "$OUT/css" -type f | wc -l) files"
echo "Images: $(find "$OUT/images" -type f | wc -l) files"
echo "Audio:  $(find "$OUT/audio" -type f | wc -l) files"
echo ""
du -sh "$OUT"
