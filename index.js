module.exports = {
  // see: github.com/stylelint/stylelint-config-standard
  extends: 'stylelint-config-standard',

  rules: {
    // disallow empty lines between declarations
    'declaration-empty-line-before': 'never',

    // always prefer class selectors and enforce camelCase
    'selector-class-pattern': '^[a-z]+([A-Z][a-z]*)*$',
    'selector-max-id': 0,

    // require quotes around font names, URLs, and attributes in selectors
    // require single quotes for strings to match JS
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',

    // disallow vendor prefixes, since we use autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // allow css-modules `composes` syntax, but disallow other unknown properties
    'property-no-unknown': [true, {
      ignoreProperties: ['composes'],
    }],

    // allow postcss `@util` syntax, but disallow other unknown at rules
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['util'],
    }],

    // require empty lines in between (nested) rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-blockless', 'inside-block'],
      ignore: ['after-comment'],
    }],

    // disallow lines longer than 100 characters
    'max-line-length': 100,

    // disallow use of !important
    'declaration-no-important': true,
  },
}
