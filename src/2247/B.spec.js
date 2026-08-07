const { isItPossibleToBuildArray } = require('./B');

describe('2247B. Yet Another Constructive', () => {
  it.each`
    n    | num  | k    | m             | result
    ${1} | ${1} | ${1} | ${1}          | ${['YES', [1]]}
    ${2} | ${5} | ${3} | ${5}          | ${['YES', [3, 1, 1, 3, 1]]}
    ${3} | ${2} | ${2} | ${1000000000} | ${['YES', [999999999, 1]]}
    ${4} | ${6} | ${4} | ${3}          | ${['NO']}
  `('Base test: $n', ({ num, k, m, result }) => {
    expect(isItPossibleToBuildArray(num, k, m)).toStrictEqual(result);
  });
});
