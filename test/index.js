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
  [6, 'at-rule-no-unknown'],
  [9, 'at-rule-no-vendor-prefix'],
  [15, 'media-feature-name-no-vendor-prefix'],
])

test('selectors', macro, 'selectors', [
  [1, 'selector-no-id'],
  [5, 'selector-class-pattern'],
  [13, 'selector-no-vendor-prefix'],
])

test('spacing', macro, 'spacing', [
  [4, 'rule-non-nested-empty-line-before'],
  [9, 'max-empty-lines'],
  [16, 'declaration-empty-line-before'],
  [23, 'rule-nested-empty-line-before'],
  [28, 'max-empty-lines'],
  [33, 'max-line-length'],
])

test('properties', macro, 'properties', [
  [3, 'declaration-no-important'],
  [5, 'property-no-unknown'],
  [6, 'property-no-vendor-prefix'],
  [7, 'value-no-vendor-prefix'],
  [15, 'selector-attribute-quotes'],
  [16, 'string-quotes'],
  [16, 'font-family-name-quotes'],
  [17, 'function-url-quotes'],
])
