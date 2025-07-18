const { getCountOfSteps } = require('./A');

describe('2113A. Shashliks', () => {
  it.each`
    n    | k      | a     | b     | x    | y    | result
    ${1} | ${10}  | ${3}  | ${4}  | ${2} | ${1} | ${8}
    ${2} | ${1}   | ${10} | ${10} | ${1} | ${1} | ${0}
    ${3} | ${100} | ${17} | ${5}  | ${2} | ${3} | ${46}
    ${4} | ${28}  | ${14} | ${5}  | ${2} | ${4} | ${10}
    ${5} | ${277} | ${5}  | ${14} | ${1} | ${3} | ${273}
  `('Base test: $n', ({ k, a, b, x, y, result }) => {
    expect(getCountOfSteps(k, a, b, x, y)).toBe(result);
  });
});
