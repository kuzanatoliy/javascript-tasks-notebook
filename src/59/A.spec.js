const { getLowerCaseOrUpperCase } = require('./A');

describe('59A. Word', () => {
  it.each`
    n    | word        | result
    ${1} | ${'HoUse'}  | ${'house'}
    ${2} | ${'ViP'}    | ${'VIP'}
    ${3} | ${'maTRIx'} | ${'matrix'}
  `('Base test: $n', ({ word, result }) => {
    expect(getLowerCaseOrUpperCase(word)).toBe(result);
  });
});
