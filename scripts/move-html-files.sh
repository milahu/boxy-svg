#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"/..

test=false
#test=true

move="git mv"
$test && move="mv"

$test && set -x

s=""
s+='s|<base href="/" target="_blank"/>|<base href="../" target="_blank"/>|;'$'\n'
s+='s|<base href="/"/>|<base href="../"/>|;'$'\n'

filename_list=$(
  find . -mindepth 1 -maxdepth 1 -not -name '*.*' -type f -printf "%P\n" | xargs grep -l -F '<!DOCTYPE html>'
)

for filename in $filename_list; do

  filename_temp=$(mktemp -u $filename.XXXXXXXXXX)
  filename_new=$filename/index.html
  $test && filename_new=test-move/$filename/index.html
  if $test; then
    cp $filename $filename_temp
  else
    $move $filename $filename_temp
  fi
  mkdir -p $(dirname $filename_new)
  $move $filename_temp $filename_new

  sed -i -E "$s" $filename_new

  diff -u $filename $filename_new || true

done
