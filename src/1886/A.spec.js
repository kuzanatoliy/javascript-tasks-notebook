const { isItPossibleToCreateArray } = require('./A');

describe('1886A. Sum of Three', () => {
  it.each`
    n    | num   | result
    ${1} | ${10} | ${['YES', [1, 2, 7]]}
    ${2} | ${4}  | ${['NO']}
    ${3} | ${15} | ${['YES', [1, 4, 10]]}
    ${4} | ${9}  | ${['NO']}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossibleToCreateArray(num)).toStrictEqual(result);
  });
});
