const { getPerfectRoots } = require('./A');

describe('2185A. Perfect Root', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[1, 2]}
    ${3} | ${5} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPerfectRoots(num)).toStrictEqual(result);
  });
});
