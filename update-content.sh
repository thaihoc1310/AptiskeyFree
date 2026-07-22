#!/bin/bash
set -e

BASE="https://aptiskey.com"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$SCRIPT_DIR/public/crawled_data"

# Only public/shared and Speaking content is still updateable without a
# privileged Aptiskey session. Reading, Listening, Writing and Grammar
# snapshots are intentionally left untouched so an update cannot replace
# embedded question data with login pages, empty API shells or 403 responses.
mkdir -p "$OUT/js" "$OUT/css" "$OUT/images/assets/img" "$OUT/images/speaking/part2" "$OUT/images/speaking/part3"

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
# 1. UPDATEABLE JS FILES
# ============================================================
echo "=== [1/5] DOWNLOADING PUBLIC/SHARED JS ==="

# Common JS
dl "$BASE/js/common.js" "$OUT/js/js_common.js" &
dl "$BASE/js/home.js" "$OUT/js/js_home.js" &
dl "$BASE/js/donate.js" "$OUT/js/js_donate.js" &
dl "$BASE/js/adminlte/adminlte.js" "$OUT/js/js_adminlte.js" &
wait

# Speaking JS
for f in speaking_question1 speaking_question1_practice speaking_question1_total \
         speaking_question2 speaking_question2_practice speaking_question2_meo \
         speaking_question3 speaking_question3_practice \
         speaking_question4 speaking_question4_practice speaking_question4_total; do
  dl "$BASE/js/speaking/${f}.js" "$OUT/js/js_speaking_${f}.js" &
done
wait
echo "  Speaking JS done"

# ============================================================
# 2. SHARED CSS
# ============================================================
echo "=== [2/5] DOWNLOADING SHARED CSS ==="
dl "$BASE/css/adminlte/adminlte.css" "$OUT/css/adminlte.css"
echo "  CSS done"

# ============================================================
# 3. IMAGES
# ============================================================
echo "=== [3/5] DOWNLOADING SHARED/SPEAKING IMAGES ==="
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

# ============================================================
# 4. EXAM REVIEWS
# ============================================================
echo "=== [4/5] DOWNLOADING APPROVED EXAM REVIEWS ==="
if command -v node >/dev/null 2>&1; then
  node "$SCRIPT_DIR/scripts/fetch-exam-reviews.mjs"
else
  echo "  WARNING: Node.js is required to update exam reviews" >&2
fi

# ============================================================
# 5. CLEANUP & VERIFY
# ============================================================
echo "=== [5/5] CLEANUP & VERIFY ==="
# Remove error pages from JS if any
for f in "$OUT"/js/*; do
  if head -3 "$f" 2>/dev/null | grep -qi "403\|404\|forbidden\|DOCTYPE html"; then
    rm -f "$f"
  fi
done

echo ""
echo "=========================================="
echo "   UPDATE COMPLETE (PUBLIC + SPEAKING)"
echo "=========================================="
echo "JS:     $(find "$OUT/js" -type f | wc -l) files"
echo "CSS:    $(find "$OUT/css" -type f | wc -l) files"
echo "Images: $(find "$OUT/images" -type f | wc -l) files"
echo "Audio:  preserved (not updated)"
echo ""
du -sh "$OUT"
