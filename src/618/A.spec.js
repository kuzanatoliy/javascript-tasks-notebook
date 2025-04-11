const { getSlimes } = require('./A');

describe('618A. Elephant', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[2]}
    ${3} | ${3} | ${[2, 1]}
    ${4} | ${8} | ${[4]}
  `('Base test: $n', ({ num, result }) => {
    expect(getSlimes(num)).toStrictEqual(result);
  });
});
