const { getValidArray } = require('./A');

describe("1942A. Farmer John's Challenge", () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${2} | ${[1, 1]}
    ${2} | ${3} | ${1} | ${[1, 2, 3]}
    ${3} | ${3} | ${2} | ${[-1]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getValidArray(num, k)).toStrictEqual(result);
  });
});
