<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD028 -->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![pre-commit][pre-commit-shield]][pre-commit-url]
[![taskfile][taskfile-shield]][taskfile-url]

# Minecraft Bedrock Version Fetcher

This action fetches the lates minecraft bedrock version.

<details>
  <summary style="font-size:1.2em;">Table of Contents</summary>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [User Story](#user-story)
- [Usage](#usage)
  - [Outputs](#outputs)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

## User Story

As a user I want to retrieve the latest bedrock version from the minecraft website to be able to update my server acordingly.

## Usage

<!-- start usage -->

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

### Outputs

| name    | type   | description                                             |
| ------- | ------ | ------------------------------------------------------- |
| version | string | The latest minecraft bedrock version. f.e. `1.20.31.01` |

<!-- end usage -->

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

<!-- Badges -->

[pre-commit-shield]: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&style=for-the-badge
[pre-commit-url]: https://github.com/pre-commit/pre-commit
[taskfile-url]: https://taskfile.dev/
[taskfile-shield]: https://img.shields.io/badge/Taskfile-Enabled-brightgreen?logoColor=white&style=for-the-badge
