#!/usr/bin/env bash

s=""
s+='/<meta id="robots-meta"/d;'$'\n'
s+='/<link id="canonical-link"/d;'$'\n'

sed -i -E "$s" index.html */index.html
