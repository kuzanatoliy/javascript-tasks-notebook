const { isItPossibleToTransform } = require('./D');

describe('1666D. Deletive Editing', () => {
  it.each`
    n    | str                                 | res           | result
    ${1} | ${'DETERMINED'}                     | ${'TRME'}     | ${'YES'}
    ${2} | ${'DETERMINED'}                     | ${'TERM'}     | ${'NO'}
    ${3} | ${'PSEUDOPSEUDOHYPOPARATHYROIDISM'} | ${'PEPA'}     | ${'NO'}
    ${4} | ${'DEINSTITUTIONALIZATION'}         | ${'DONATION'} | ${'YES'}
    ${5} | ${'CONTEST'}                        | ${'CODE'}     | ${'NO'}
    ${6} | ${'SOLUTION'}                       | ${'SOLUTION'} | ${'YES'}
  `('Base test: $n', ({ str, res, result }) => {
    expect(isItPossibleToTransform(str, res)).toBe(result);
  });
});
