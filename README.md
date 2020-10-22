# stylelint-config-kensho

[![Build Status](https://img.shields.io/github/workflow/status/kensho/stylelint-config-kensho/CI/main)](https://github.com/kensho/stylelint-config-kensho/actions)
[![npm](https://img.shields.io/npm/v/stylelint-config-kensho.svg)](https://npm.im/stylelint-config-kensho)

This [Stylelint config](http://stylelint.io/user-guide/configuration/#extends) extends the [standard config](https://github.com/stylelint/stylelint-config-standard) with a few customizations to support our CSS infrastructure, which uses [postcss](https://github.com/postcss/postcss) and [CSS modules](https://github.com/css-modules/css-modules) for JS interoperability.

## Usage

To use the config, install stylelint and this config as development dependencies:

```sh
$ npm i -D stylelint stylelint-config-kensho
```

Add a [`.stylelintrc.yml`](http://stylelint.io/user-guide/configuration/) (or equivalent) which extends the config:

```yaml
extends: stylelint-config-kensho
```

Add an npm script in `package.json` to run the linter on all CSS files:

```json
{
  "scripts": {
    "lint:css": "stylelint 'src/**/*.css'"
  }
}
```
