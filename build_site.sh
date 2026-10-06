#!/bin/sh
# Copies the files the web app needs into dist/, which is the only folder
# Firebase Hosting deploys. To publish a new file, add it to FILES.
set -eu
cd "$(dirname "$0")"

FILES="index.html front.svg back.svg left.svg right.svg"

rm -rf dist
mkdir dist
for f in $FILES; do
  cp "$f" dist/
done
echo "dist/ contains: $(ls dist | tr '\n' ' ')"
