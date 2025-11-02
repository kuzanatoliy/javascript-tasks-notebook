const { isNumberExisted } = require('./B');

describe('2153A. Circle of Apple Trees', () => {
  it.each`
    n    | x        | y       | z        | result
    ${1} | ${1}     | ${1}    | ${1}     | ${'YES'}
    ${2} | ${3}     | ${2}    | ${6}     | ${'YES'}
    ${3} | ${4}     | ${8}    | ${12}    | ${'NO'}
    ${4} | ${9}     | ${10}   | ${12}    | ${'YES'}
    ${5} | ${12730} | ${3088} | ${28130} | ${'NO'}
  `('Base test: $n', ({ x, y, z, result }) => {
    expect(isNumberExisted(x, y, z)).toBe(result);
  });
});
