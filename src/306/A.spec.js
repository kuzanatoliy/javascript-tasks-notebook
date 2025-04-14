const { getPresents } = require('./A');

describe('306A. Candies', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${12} | ${3} | ${[4, 4, 4]}
    ${2} | ${15} | ${4} | ${[3, 4, 4, 4]}
    ${3} | ${18} | ${7} | ${[2, 2, 2, 3, 3, 3, 3]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPresents(num, k)).toStrictEqual(result);
  });
});
