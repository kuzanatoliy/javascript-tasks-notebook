const { getCountOfLinePairs } = require('./A');

describe('1248A. Integer Points', () => {
  it.each`
    n    | arrP         | arrQ      | result
    ${1} | ${[1, 3, 2]} | ${[0, 3]} | ${3}
    ${2} | ${[1]}       | ${[1]}    | ${1}
    ${3} | ${[2]}       | ${[1]}    | ${0}
  `('Base test: $n', ({ arrP, arrQ, result }) => {
    expect(getCountOfLinePairs(arrP, arrQ)).toBe(result);
  });
});
