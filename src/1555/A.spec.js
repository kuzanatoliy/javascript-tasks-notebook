const { getTime } = require('./A');

describe('1555A. PizzaForces', () => {
  it.each`
    n    | num    | result
    ${1} | ${12}  | ${30}
    ${2} | ${15}  | ${40}
    ${3} | ${300} | ${750}
    ${4} | ${1}   | ${15}
    ${5} | ${3}   | ${15}
  `('Base test: $n', ({ num, result }) => {
    expect(getTime(num)).toBe(result);
  });
});
