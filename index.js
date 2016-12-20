module.exports = {
  // see: github.com/stylelint/stylelint-config-standard
  extends: 'stylelint-config-standard',

  rules: {
    // disallow empty lines between declarations
    'declaration-empty-line-before': 'never',

    // require quotes around font names for consistency
    'font-family-name-quotes': 'always-unless-keyword',

    // require quotes around URLs
    'function-url-quotes': 'always',

    // require quotes around attributes in selectors
    'selector-attribute-quotes': 'always',

    // always prefer class selectors
    'selector-no-id': true,

    // use single quotes for strings to match JS
    'string-quotes': 'single',

    // disallow vendor prefixes, since we use autoprefixer
    'value-no-vendor-prefix': true,

    // allow css-modules `composes` syntax, but disallow other unknown properties
    'property-no-unknown': [true, {
      ignoreProperties: ['composes'],
    }],

    // allow css-modules `@mixin` and `@value` syntax, but disallow other unknown at rules
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'value'],
    }],

    // require empty lines in between (nested) rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-group', 'all-nested'],
      ignore: ['after-comment'],
    }],

    // enforce camelCase class selectors
    'selector-class-pattern': '^[a-z]+([A-Z][a-z]*)*$',

    // disallow lines longer than 100 characters
    'max-line-length': 100,
  },
}
