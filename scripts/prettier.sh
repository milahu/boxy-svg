#!/usr/bin/env bash

s=""

mangled_html="un"
mangled_css="xn"

# rename tagged template literals to html`...` and css`...`
# so prettier can prettify the string contents
# \b = word boundary
s+='s/\b'$mangled_html'`/html`/g;'
s+='s/\b'$mangled_css'`/css`/g;'

# rename the tag functions to html and css
s+='s/let '$mangled_html' =/let html =/g;'
s+='s/let '$mangled_css' =/let css =/g;'

# replace html`${'str'}` with html`str`
# \b = word boundary
s+="s/\bhtml\`\\\$\{'([^'\`]*)'\}\`;/html\`\1\`;/g;"

sed -i -E "$s" elements/apps/bx-progressivewebapp.js

prettier -w \
  elements/apps/bx-progressivewebapp.js \
  libs/xel/themes/*.css \
