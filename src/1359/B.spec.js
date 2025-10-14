const { getCost } = require('./A');

describe('1359B. New Theatre Square', () => {
  it.each`
    n    | x     | y    | matrix                                                 | result
    ${1} | ${10} | ${1} | ${[['.']]}                                             | ${10}
    ${2} | ${10} | ${1} | ${[['.', '.']]}                                        | ${1}
    ${3} | ${10} | ${1} | ${[['.'], ['.']]}                                      | ${20}
    ${4} | ${3}  | ${7} | ${[['.', '.', '*'], ['*', '.', '.'], ['.', '.', '*']]} | ${18}
  `('Base test: $n', ({ x, y, matrix, result }) => {
    expect(getCost(x, y, matrix)).toBe(result);
  });
});
