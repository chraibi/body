#!/bin/sh
# Copies the files the web app needs into dist/, which is the only folder
# Firebase Hosting deploys. To publish a new file, add it to FILES.
set -eu
cd "$(dirname "$0")"

FILES="index.html translations.js front.svg back.svg left.svg right.svg"

# index.html embeds each filled silhouette (<view>_fill.svg) as a base64 data
# URI in BODY_MASK_DATA_URIS rather than loading the file, so an edited
# *_fill.svg only reaches the app once it is re-embedded here.
for view in front back left right; do
  b64=$(base64 < "${view}_fill.svg" | tr -d '\n')
  awk -v prefix="      ${view}: \"data:image/svg+xml;base64," -v b64="$b64" '
    index($0, prefix) == 1 { print prefix b64 "\","; n++; next }
    { print }
    END { if (n != 1) exit 1 }
  ' index.html > index.html.tmp || {
    rm -f index.html.tmp
    echo "error: no single '${view}:' mask entry found in index.html" >&2
    exit 1
  }
  if cmp -s index.html index.html.tmp; then
    rm index.html.tmp
  else
    mv index.html.tmp index.html
    echo "Re-embedded ${view}_fill.svg into index.html"
  fi
done

rm -rf dist
mkdir dist
for f in $FILES; do
  cp "$f" dist/
done
echo "dist/ contains: $(ls dist | tr '\n' ' ')"
