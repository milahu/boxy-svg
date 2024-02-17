#!/usr/bin/env bash

cat >/dev/null <<'EOF'

  wakaru from
  https://github.com/pionxzh/wakaru

  only the "smart-rename" rule of wakaru is enabled

  wakaru/packages/unminify/src/transformations/index.ts

  import smartRename from './smart-rename'
  import type { TransformationRule } from '@wakaru/shared/rule'
  export const transformationRules: TransformationRule[] = [
      smartRename, // partially relies on `un-indirect-call` to work
  ]

  see also
  https://github.com/j4k0xb/webcrack/issues/62
  add smart-rename rule from wakaru



  prettier from
  https://github.com/prettier/prettier

EOF



tempdir=$(mktemp -d temp.XXXXXXXX)

while read f; do
  echo $f
  $(which time) -v \
  wakaru unminify -o $tempdir -f $f </dev/null
  mv -v $tempdir/$(basename $f) $f
  prettier -w $f
done < <(
  find . \
    -name '*.js' \
    -not -path './libs/*' \
    -not -path './scripts/*' \
    -not -path './node_modules*/*' \
)

rm -rf $tempdir
