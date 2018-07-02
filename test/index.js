import test from 'ava'
import {lint} from 'stylelint'

const macro = async (t, input, expected) => {
  const result = await lint({files: `${__dirname}/fixtures/${input}.css`})
  t.is(result.results.length, 1, 'linted exactly one file')
  const actual = result.results[0]
  t.is(actual.invalidOptionWarnings.length, 0, 'config did not contain invalid options')
  t.is(expected.length, actual.warnings.length, 'found the correct number of errors')
  expected.forEach(([line, rule]) => {
    const error = actual.warnings.find(warning => warning.line === line && warning.rule === rule)
    t.truthy(error, `found error ${rule} on line ${line}`)
  })
}

macro.title = provided => `lints issues with ${provided}`

test('at rules', macro, 'atRules', [
  [1, 'at-rule-no-unknown'],
  [2, 'at-rule-no-unknown'],
  [5, 'at-rule-no-unknown'],
  [8, 'at-rule-no-vendor-prefix'],
  [14, 'media-feature-name-no-vendor-prefix'],
])

test('selectors', macro, 'selectors', [
  [1, 'selector-max-id'],
  [5, 'selector-class-pattern'],
  [13, 'selector-no-vendor-prefix'],
])

test('spacing', macro, 'spacing', [
  [4, 'rule-empty-line-before'],
  [9, 'max-empty-lines'],
  [16, 'declaration-empty-line-before'],
  [23, 'rule-empty-line-before'],
  [28, 'max-empty-lines'],
  [33, 'max-line-length'],
])

test('properties', macro, 'properties', [
  [3, 'declaration-no-important'],
  [4, 'property-no-unknown'],
  [5, 'property-no-vendor-prefix'],
  [6, 'value-no-vendor-prefix'],
  [14, 'selector-attribute-quotes'],
  [15, 'string-quotes'],
  [15, 'font-family-name-quotes'],
  [16, 'function-url-quotes'],
])
