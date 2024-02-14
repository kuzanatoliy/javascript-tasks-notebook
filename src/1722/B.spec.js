const { isIdenticalRows } = require('./B');

describe('1722B. Colourblindness', () => {
  it.each`
    n    | row1          | row2          | result
    ${1} | ${'RG'}       | ${'RB'}       | ${'YES'}
    ${2} | ${'GRBG'}     | ${'GBGB'}     | ${'NO'}
    ${3} | ${'GGGGG'}    | ${'BBBBB'}    | ${'YES'}
    ${4} | ${'BBBBBBB'}  | ${'RRRRRRR'}  | ${'NO'}
    ${5} | ${'RGBRRGBR'} | ${'RGGRRBGR'} | ${'YES'}
    ${6} | ${'G'}        | ${'G'}        | ${'YES'}
  `('Base test: $n', ({ row1, row2, result }) => {
    expect(isIdenticalRows(row1, row2)).toBe(result);
  });
});
