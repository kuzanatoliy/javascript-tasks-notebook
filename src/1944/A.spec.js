const { getCountOfIslands } = require('./A');

describe('1944A. Destroying Bridges', () => {
  it.each`
    n    | num  | k     | result
    ${1} | ${2} | ${0}  | ${2}
    ${2} | ${2} | ${1}  | ${1}
    ${3} | ${4} | ${1}  | ${4}
    ${4} | ${5} | ${10} | ${1}
    ${5} | ${5} | ${3}  | ${5}
    ${6} | ${4} | ${4}  | ${1}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfIslands(num, k)).toBe(result);
  });
});
