const { isItPossibleToBuildArray } = require('./B');

describe('1708B. Difference of GCDs', () => {
  it.each`
    n    | num   | l             | r             | result
    ${1} | ${5}  | ${1}          | ${5}          | ${['YES', [1, 2, 3, 4, 5]]}
    ${2} | ${9}  | ${1000}       | ${2000}       | ${['YES', [1000, 1000, 1002, 1000, 1000, 1002, 1001, 1000, 1008]]}
    ${3} | ${10} | ${30}         | ${35}         | ${['NO']}
    ${4} | ${1}  | ${1000000000} | ${1000000000} | ${['YES', [1000000000]]}
  `('Base test: $n', ({ num, l, r, result }) => {
    expect(isItPossibleToBuildArray(num, l, r)).toStrictEqual(result);
  });
});
