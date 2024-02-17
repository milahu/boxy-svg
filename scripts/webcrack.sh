#!/usr/bin/env bash

# webcrack from
# https://github.com/j4k0xb/webcrack

# prettier from
# https://github.com/prettier/prettier

while read f; do
  echo $f
  webcrack $f | sponge $f
  prettier -w $f
done < <(
  find . \
    -name '*.js' \
    -not -path './libs/*' \
    -not -path './scripts/*' \
    -not -path './node_modules*/*' \
)
