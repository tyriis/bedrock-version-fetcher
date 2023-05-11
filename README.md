# Minecraft Bedrock Version Fetcher Github Action

This Action fetches the lates minecraft bedrock version.

## Outputs

## `version`

The latest minecraft bedrock version.

## Example usage

```yaml
name: Minecraft version

on:
  workflow_dispatch:

jobs:
  bedrock-version:
    runs-on: ubuntu-latest
    name: prints the minecraft bedrock version
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Fetch Bedrock Version
        uses: tyriis/bedrock-version-fetcher@v2
        id: bedrock
      - name: print the bedrock veesion
        run: echo "Current Minecraft Bedrock version is ${{ steps.bedrock.outputs.version }}"
```
