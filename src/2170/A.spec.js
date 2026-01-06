const { getMaxCost } = require('./A');

describe('2170A. Maximum Neighborhood', () => {
  it.each`
    n    | num    | result
    ${1} | ${1}   | ${1}
    ${2} | ${2}   | ${9}
    ${3} | ${3}   | ${29}
    ${4} | ${4}   | ${56}
    ${5} | ${5}   | ${95}
    ${6} | ${13}  | ${775}
    ${7} | ${100} | ${49495}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxCost(num)).toBe(result);
  });
});
