const { getPermutation } = require('./B');

describe('2106B. St. Chroma', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${4} | ${2} | ${[0, 1, 3, 2]}
    ${2} | ${4} | ${0} | ${[3, 2, 1, 0]}
    ${3} | ${5} | ${0} | ${[4, 3, 2, 1, 0]}
    ${4} | ${1} | ${1} | ${[0]}
    ${5} | ${3} | ${3} | ${[0, 1, 2]}
    ${6} | ${1} | ${0} | ${[0]}
    ${7} | ${4} | ${3} | ${[0, 1, 2, 3]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPermutation(num, k)).toStrictEqual(result);
  });
});
