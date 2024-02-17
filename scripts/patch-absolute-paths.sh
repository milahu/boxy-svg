#!/usr/bin/env bash


# FIXME themes/adwaita-dark.css  src: url("libs/cantarell/cantarell.woff2") format("woff2");

cd "$(dirname "$0")"
source common.sh
cd ..

# FIXME restore

# use relative import paths
# this is not trivial
# because we have to resolve nested paths
# for example from /elements/app/main.js to /libs/foo/bar.js
# result: ../../libs/foo/bar.js
#./scripts/eslint.sh

s=""

add() {
  local before="$1"
  local after="$2"
  local start="$3"
  local glob_suffix="$4"
  if [[ "$glob_suffix" == "*" ]]; then
    s+="$before""(')""($start""([^']*))(')""$after"$'\n' # '...'
    s+="$before"'(")'"($start"'([^"]*))(")'"$after"$'\n' # "..."
    s+="$before"'(`)'"($start"'([^`]*))(`)'"$after"$'\n' # `...`
  elif [[ "$glob_suffix" == "+" ]]; then
    s+="$before""(')""($start""([^']+))(')""$after"$'\n' # '...'
    s+="$before"'(")'"($start"'([^"]+))(")'"$after"$'\n' # "..."
    s+="$before"'(`)'"($start"'([^`]+))(`)'"$after"$'\n' # `...`
  else
    s+="$before""(')""($start"")(')""$after"$'\n' # '...'
    s+="$before"'(")'"($start"')(")'"$after"$'\n' # "..."
    s+="$before"'(`)'"($start"')(`)'"$after"$'\n' # `...`
  fi
}

# depth 4: libs/paddle/assets/images/health-check.gif

for depth in {0..4}; do

  for ext in "html" "css" "*"; do

    is_html=$(if [ "$ext" = "html" ]; then echo true; else echo false; fi)
    is_css=$(if [ "$ext" = "css" ]; then echo true; else echo false; fi)

    s=""

    rel_prefix=
    #if $is_css || $is_html; then
    if $is_css; then
      # css paths are relative to dirname of html file
      # themes/adwaita-dark.css
      # bad:  @import url("../libs/xel/themes/adwaita-dark.css");
      # good: @import url("./libs/xel/themes/adwaita-dark.css");
      rel_prefix=.
    else
      case $depth in
        0) rel_prefix=. ;;
        1) rel_prefix=.. ;;
        2) rel_prefix=../.. ;;
        3) rel_prefix=../../.. ;;
        4) rel_prefix=../../../.. ;;
        *) echo FIXME depth $depth; exit 1 ;;
      esac
    fi

    if $is_html; then
      # only patch <base href="...">
      rel_prefix_html="$rel_prefix"
      rel_prefix="."
    fi

    echo "rel_prefix $rel_prefix"

    # move /app/somepath to ./app/somepath
    add "s:" ":\1./app/\2\1:g;" "/app/" "+"

    # move /app to ./app
    add "s:" ":\1./app\1:g;" "/app"

    if false; then
    # prepend "." + append ".html"
    #add "s:" ":\1$rel_prefix\2.html\1:g;" "/(app|blog|ideas|bugs|questions|tutorials|changelog|embed|search|press|legal)"
    add "s:" ":\1$rel_prefix\2.html\1:g;" "/(blog|ideas|bugs|questions|tutorials|changelog|embed|search|press|legal)"
    add "s:" ":\1$rel_prefix\2.html\1:g;" "/(blog|ideas|bugs|questions|tutorials|changelog|embed|search|press|legal)/" "+"
    fi

    # prepend "."
    # elements/apps/bx-progressivewebapp.js '/themes/'
    add "s:" ":\1$rel_prefix\2\1:g;" "/(elements|workers|images|templates|themes|locales|libs)/" "*"
    add "s:" ":\1$rel_prefix\2\1:g;" "/(boxy-svg.webmanifest|fallback.js|progressive-web-app.js|portal-web-app.js)"

    # patch html files
    if $is_html; then
      add "s|" "|\1./libs/paddle/\3\1|g;" "https://cdn\.paddle\.com/paddle/" "+"
      if false; then
      s+='s|<base href="/" target="_blank"/>|<base href="./" target="_blank"/>|;'$'\n'
      s+='s|<base href="/"/>|<base href="./"/>|;'$'\n'
      fi
      s+='s|<base href="/" target="_blank"/>|<base href="'"$rel_prefix_html"'/" target="_blank"/>|;'$'\n'
      s+='s|<base href="/"/>|<base href="'"$rel_prefix_html"'/"/>|;'$'\n'
    fi

    s+='s|src="https://www.youtube.com/iframe_api"|src="./libs/youtube/iframe_api.js"|;'$'\n'

    #echo "$s"; exit

    if $is_css; then
      find "${find_paths[@]}" -mindepth $depth -maxdepth $depth -type f \
      -not -path 'workers_service.js' \
      -not -name '*.pretty' \
      -name '*.css' \
      |
      xargs sed -i -E "$s"
    elif $is_html; then
      find "${find_paths[@]}" -mindepth $depth -maxdepth $depth -type f \
      -not -path 'workers_service.js' \
      -not -name '*.pretty' \
      -name '*.html' \
      |
      xargs sed -i -E "$s"
    else
      find "${find_paths[@]}" -mindepth $depth -maxdepth $depth -type f \
      -not -path 'workers_service.js' \
      -not -name '*.pretty' \
      -not -name '*.css' \
      -not -name '*.html' \
      |
      xargs sed -i -E "$s"
    fi

  done

done

# paths are relative to ./ not to ./workers/
# bad: '../themes/adwaita-dark.css'
# good: './themes/adwaita-dark.css'
#sed -i -E "s:'\.\./(libs|themes)/:'./\1/:g" workers_service.js

# fix elements/apps/bx-progressivewebapp.js
# bad: ../../themes/
# good: ./themes/
# bad: '../../boxy-svg.webmanifest'
# bad: "../../boxy-svg.webmanifest"
files=(
  elements/apps/bx-progressivewebapp.js
  elements/apps/bx-portalwebapp.js
)
sed -i -E "s:'\.\./\.\./(themes/|locales/|templates/|images/|boxy-svg\.webmanifest):'./\1:g" "${files[@]}"
sed -i -E 's:"\.\./\.\./(themes/|locales/|templates/|images/|boxy-svg\.webmanifest):"./\1:g' "${files[@]}"

# elements/generators/bx-asciifygenerator.js
# bad  '../../workers/asciify.js'
# good './workers/asciify.js'
sed -i -E "s:'\.\./\.\./(workers)/:'./\1/:g" elements/generators/*.js

# patch /base/workers_service.js
# all paths are relative to /base/
rel_prefix=.
s=""
add "s:" ":\1$rel_prefix\2\1:g;" "/(elements|workers|images|templates|themes|locales|libs)/" "*"
add "s:" ":\1$rel_prefix\2\1:g;" "/(boxy-svg.webmanifest|fallback.js|progressive-web-app.js|portal-web-app.js)"
sed -i -E "$s" workers_service.js

files=(
  #workers_service.js
  workers_service.js
  templates/fallback.tpl
  elements/apps/bx-progressivewebapp.js
  elements/apps/bx-portalwebapp.js
)
sed -i 's|https://storage.boxy-svg.com/|./storage/|g' "${files[@]}"

files=(
  elements/apps/bx-progressivewebapp.js
  elements/apps/bx-portalwebapp.js
  $(find elements/generators/ -name '*.js')
)
sed -i -E 's|https://boxy-svg.com/app/|./app/|g' "${files[@]}"
sed -i -E 's|https://boxy-svg.com/app|./app|g' "${files[@]}"
sed -i -E 's#https://boxy-svg.com/(share|profiles)/#./\1/#g' "${files[@]}"
sed -i -E 's#https://boxy-svg.com/#./#g' "${files[@]}"
sed -i -E 's#https://boxy-svg.com#./#g' "${files[@]}"

files=(
  $(find locales/ -type f -name '*.ftl')
)
sed -i -E 's#https://boxy-svg.com/((questions|blog)/)#./\1/#g' "${files[@]}"

sed -i -E "s#'./libs/paddle/assets/images/loading.gif'#'../images/loading.gif'#" libs/paddle/assets/css/paddle.css

# rewrite app path to /
# see also elements/apps/bx-portalwebapp.js.rewrite-path.js
f=elements/apps/bx-portalwebapp.js
a="let ag=location['pathname'],ah=this"
b="let ag=location['pathname']; const basePathLength=new URL(import.meta.url).pathname.length-33; ag=ag.slice(basePathLength); let ah=this"
s=$(<$f)
echo -n "${s//"$a"/"$b"}" >$f

# add empty libs/youtube/iframe_api.js
mkdir -p libs/youtube
touch libs/youtube/iframe_api.js
git add libs/youtube/iframe_api.js

# fix: DOMException
cat >/dev/null <<'EOF'
  Failed to register a ServiceWorker
  for scope ('/boxy-svg/')
  with script ('/boxy-svg/workers/service.js')

  The path of the provided scope ('/boxy-svg/')
  is not under the max scope allowed ('/boxy-svg/workers/').
  Adjust the scope, move the Service Worker script,
  or use the Service-Worker-Allowed HTTP header to allow the scope.
EOF
git mv workers/service.js workers_service.js
