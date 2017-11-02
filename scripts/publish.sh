#!/bin/bash

set -e

if [ "$1" != "--no-build" ]; then
  npm run lint
  npm run build
fi

npm --no-git-tag-version version
npm version patch
npm publish --access public
