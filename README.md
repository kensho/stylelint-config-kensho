# stylelint-config-kensho

[![CircleCI](https://circleci.com/gh/kensho/stylelint-config-kensho.svg?style=svg)](https://circleci.com/gh/kensho/stylelint-config-kensho)

This [Stylelint config](http://stylelint.io/user-guide/configuration/#extends) extends the [standard config](https://github.com/stylelint/stylelint-config-standard) with a few customizations to support our CSS infrastructure, which uses [postcss](https://github.com/postcss/postcss) and [CSS modules](https://github.com/css-modules/css-modules) for JS interoperability.

## Usage

To use the config, install stylelint and this config as development dependencies:

```sh
$ npm i -D stylelint stylelint-config-kensho
```

Add a [`.stylelintrc.json`](http://stylelint.io/user-guide/configuration/) which extends the config:

```json
{
  "extends": "stylelint-config-kensho"
}
```

Add an npm script in `package.json` to run the linter on all CSS files:

```json
{
  "scripts": {
    "lint:css": "stylelint 'src/**/*.css'"
  }
}
```
