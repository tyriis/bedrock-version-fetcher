#!/bin/sh -l

version=$(node /app/src/index.mjs)

echo "version=$version" >> $GITHUB_OUTPUT
