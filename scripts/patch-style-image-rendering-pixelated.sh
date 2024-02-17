#!/usr/bin/env bash

grep -l -r -F -- 'background: var(--checkboard-background);' |
xargs sed -i 's/background: var(--checkboard-background);/background: var(--checkboard-background); image-rendering: pixelated;/g'
