const { getCountOfSteps } = require('./A');

describe('1895A. Treasure Chest', () => {
  it.each`
    n    | x     | y    | k    | result
    ${1} | ${5}  | ${7} | ${2} | ${7}
    ${2} | ${10} | ${5} | ${0} | ${10}
    ${3} | ${5}  | ${8} | ${2} | ${9}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getCountOfSteps(x, y, k)).toBe(result);
  });
});
