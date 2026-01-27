const { isItPossibleToCrack } = require('./B');

describe('2092B. Lady Bug', () => {
  it.each`
    n    | strA        | strB        | result
    ${1} | ${'000'}    | ${'000'}    | ${'YES'}
    ${2} | ${'010001'} | ${'010111'} | ${'YES'}
    ${3} | ${'10000'}  | ${'01010'}  | ${'NO'}
    ${4} | ${'11'}     | ${'00'}     | ${'YES'}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(isItPossibleToCrack(strA, strB)).toBe(result);
  });
});
