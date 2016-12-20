import test from 'ava'
import {lint} from 'stylelint'

const invalid = async (t, input, errors = 1) => {
  // TODO: improve error messages
  const result = await lint({files: `${__dirname}/fixtures/${input}.css`})
  t.is(result.results[0].warnings.length, errors)
}

invalid.title = provided => `lints issues with ${provided}`

test('at rules', invalid, 'at')
test('selectors', invalid, 'selectors', 2)
test('line breaks', invalid, 'linebreaks', 5)
test('properties', invalid, 'properties')
