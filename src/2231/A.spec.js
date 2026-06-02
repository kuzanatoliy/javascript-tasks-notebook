const { buildArray } = require('./A');

describe('2231A. Construct an Array', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${3} | ${[1, 3, 5]}
    ${3} | ${6} | ${[1, 3, 5, 7, 9, 11]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildArray(num)).toStrictEqual(result);
  });
});
