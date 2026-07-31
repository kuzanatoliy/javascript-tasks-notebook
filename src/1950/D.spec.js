const { isItPossible } = require('./D');

describe('1950D. Product of Binary Decimals', () => {
  it.each`
    n     | num       | result
    ${1}  | ${121}    | ${'YES'}
    ${2}  | ${1}      | ${'YES'}
    ${3}  | ${14641}  | ${'YES'}
    ${4}  | ${12221}  | ${'YES'}
    ${5}  | ${10110}  | ${'YES'}
    ${6}  | ${100000} | ${'YES'}
    ${7}  | ${99}     | ${'NO'}
    ${8}  | ${112}    | ${'NO'}
    ${9}  | ${2024}   | ${'NO'}
    ${10} | ${12421}  | ${'NO'}
    ${11} | ${1001}   | ${'YES'}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossible(num)).toBe(result);
  });
});
