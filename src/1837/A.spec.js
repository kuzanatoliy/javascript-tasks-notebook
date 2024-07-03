const { getJumps } = require('./A');

describe('1837A. Grasshopper on a Line', () => {
  it.each`
    n    | x     | k    | result
    ${1} | ${10} | ${2} | ${[2, [1, 9]]}
    ${2} | ${10} | ${3} | ${[1, [10]]}
    ${3} | ${3}  | ${4} | ${[1, [3]]}
  `('Base test: $n', ({ x, k, result }) => {
    expect(getJumps(x, k)).toStrictEqual(result);
  });
});
