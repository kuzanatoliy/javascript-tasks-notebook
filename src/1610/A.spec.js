const { getCountOfLength } = require('./A');

describe("1610A. Anti Light's Cell Guessing", () => {
  it.each`
    n    | num  | m    | result
    ${1} | ${2} | ${3} | ${2}
    ${2} | ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getCountOfLength(num, m)).toStrictEqual(result);
  });
});
