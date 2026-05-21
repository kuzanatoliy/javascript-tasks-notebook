const { buildSet } = require('./A');

describe('753A. Santa Claus and Candies', () => {
  it.each`
    n    | num  | result
    ${1} | ${5} | ${[1, 4]}
    ${2} | ${9} | ${[1, 2, 6]}
    ${3} | ${2} | ${[2]}
    ${4} | ${1} | ${[1]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildSet(num)).toStrictEqual(result);
  });
});
