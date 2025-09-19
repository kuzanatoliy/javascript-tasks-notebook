const { transformString } = require('./A');

describe('729A. Interview with Oleg', () => {
  it.each`
    n    | str                | result
    ${1} | ${'aogogob'}       | ${'a***b'}
    ${2} | ${'ogogmgogogogo'} | ${'***gmg***'}
    ${3} | ${'ogoogoogo'}     | ${'*********'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
