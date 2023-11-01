const { getLowerCaseOrUpperCase } = require('./A');

describe('50A. Domino piling', () => {
  it.each`
    n    | word        | result
    ${1} | ${'HoUse'}  | ${'house'}
    ${2} | ${'ViP'}    | ${'VIP'}
    ${2} | ${'maTRIx'} | ${'matrix'}
  `('Base test: $n', ({ word, result }) => {
    expect(getLowerCaseOrUpperCase(word)).toBe(result);
  });
});
