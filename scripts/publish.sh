#!/bin/bash

set -e

npm run lint
npm run build

npm --no-git-tag-version version
npm version patch
npm publish --access public
