#!/bin/sh -l

version=$(node src/index.mjs)

echo "version=$version" >> $GITHUB_OUTPUT
