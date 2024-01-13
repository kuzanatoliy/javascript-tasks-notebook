const { getCountOfPyramids } = require('./B');

describe('1345B. Card Constructions', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${1}
    ${2} | ${14}  | ${2}
    ${3} | ${15}  | ${1}
    ${4} | ${24}  | ${3}
    ${5} | ${1}   | ${0}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfPyramids(number)).toBe(result);
  });
});
