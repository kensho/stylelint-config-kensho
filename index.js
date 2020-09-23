module.exports = {
  // see: github.com/stylelint/stylelint-config-standard
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  rules: {
    // require the most concise expression of properties
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,

    // always prefer class selectors and enforce camelCase
    'selector-class-pattern': '^[a-z]+([A-Z][a-z]*)*$',
    'selector-max-id': 0,

    // disallow vendor prefixes, since we use autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // disallow use of !important
    'declaration-no-important': true,
  },
}
