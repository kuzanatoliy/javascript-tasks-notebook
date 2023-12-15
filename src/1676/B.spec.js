const { getCountOfCandies } = require('./B');

describe('1676B. Equal Candies', () => {
  it.each`
    n    | boxes                                | result
    ${1} | ${[1, 2, 3, 4, 5]}                   | ${10}
    ${2} | ${[1000, 1000, 5, 1000, 1000, 1000]} | ${4975}
    ${3} | ${[1, 2, 3, 5, 1, 2, 7, 9, 13, 5]}   | ${38}
    ${4} | ${[8, 8, 8]}                         | ${0}
    ${5} | ${[10000000]}                        | ${0}
  `('Base test: $n', ({ boxes, result }) => {
    expect(getCountOfCandies(boxes)).toBe(result);
  });
});
