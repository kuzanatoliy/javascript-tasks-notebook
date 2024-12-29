const { getNumbers } = require('./A');

describe('1788A. Exponential Equation', () => {
  it.each`
    n    | num         | result
    ${1} | ${3}        | ${[-1]}
    ${2} | ${7}        | ${[-1]}
    ${3} | ${42}       | ${[1, 21]}
    ${4} | ${31250}    | ${[1, 15625]}
    ${5} | ${20732790} | ${[1, 10366395]}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumbers(num)).toStrictEqual(result);
  });
});
