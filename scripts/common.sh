#!/usr/bin/env bash

start="(app|blog|ideas|bugs|questions|tutorials|changelog|embed|search|press|legal|elements|workers|images|templates|themes|locales|libs|boxy-svg.webmanifest)"

find_paths=(
  elements/
  libs/
  themes/
  workers/
  workers_service.js
  templates/
  locales/

  index.html

  fallback.js
  boxy-svg.webmanifest
  progressive-web-app.js
  portal-web-app.js

  app
  blog
  ideas
  bugs
  questions
  tutorials
  changelog
  embed
  search
  press
  legal
)
