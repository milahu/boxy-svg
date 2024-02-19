#!/usr/bin/env bash

set -e
set -x

mkdir -p storage/artworks

# example:
# url: https://storage.boxy-svg.com/artworks/-M52fICO8STo3jd7f3h-.svg
# id: -M52fICO8STo3jd7f3h-

for id in "$@"; do
  id=${id##*/} # remove path prefix
  id=${id%.*} # remove file extension
  for path in artworks/$id.svg artworks/$id.png; do
    curl -o storage/$path https://storage.boxy-svg.com/$path
  done
done

echo ok
