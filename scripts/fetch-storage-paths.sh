#!/usr/bin/env bash

set -e
set -x

for path in "$@"; do
  mkdir -p storage/${path%/*}
  curl -o storage/$path https://storage.boxy-svg.com/$path
done

echo ok
