const { getMaxHeight } = require('./A');

describe('A. Function Height', () => {
  it.each`
    n    | num                    | k                      | result
    ${1} | ${4n}                  | ${3n}                  | ${1n}
    ${2} | ${4n}                  | ${12n}                 | ${3n}
    ${3} | ${999999999999999999n} | ${999999999999999986n} | ${1n}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMaxHeight(num, k)).toBe(result);
  });
});
