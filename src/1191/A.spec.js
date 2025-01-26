const { getCategory } = require('./A');

describe('1191A. Tokitsukaze and Enhancement', () => {
  it.each`
    n    | num   | result
    ${1} | ${33} | ${[0, 'A']}
    ${2} | ${98} | ${[1, 'B']}
    ${3} | ${43} | ${[2, 'A']}
  `('Base test: $n', ({ num, result }) => {
    expect(getCategory(num)).toStrictEqual(result);
  });
});
