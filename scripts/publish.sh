#!/bin/bash

set -e

npm --no-git-tag-version version
npm version patch
npm publish --access public
