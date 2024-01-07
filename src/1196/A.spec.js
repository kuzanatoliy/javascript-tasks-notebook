const { getMaximumNumberOfCandies } = require('./A');

describe('1196A. Three Piles of Candies', () => {
  it.each`
    n    | numbers                                                         | result
    ${1} | ${[1, 3, 4]}                                                    | ${4n}
    ${2} | ${[1, 10, 100]}                                                 | ${55n}
    ${3} | ${[10000000000000000n, 10000000000000000n, 10000000000000000n]} | ${15000000000000000n}
    ${4} | ${[23, 34, 45]}                                                 | ${51n}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMaximumNumberOfCandies(numbers)).toBe(result);
  });
});
