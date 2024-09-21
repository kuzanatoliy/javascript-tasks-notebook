const { getNirestNumber } = require('./A');

describe('1183A. Nearest Interesting Number', () => {
  it.each`
    n    | num    | result
    ${1} | ${432} | ${435}
    ${2} | ${99}  | ${103}
    ${3} | ${237} | ${237}
    ${4} | ${42}  | ${44}
  `('Base test: $n', ({ num, result }) => {
    expect(getNirestNumber(num)).toBe(result);
  });
});
