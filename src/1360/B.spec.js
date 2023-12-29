const { getDif } = require('./B');

describe('1560B. Honest Coach', () => {
  it.each`
    n    | strengthes            | result
    ${1} | ${[3, 1, 2, 6, 4]}    | ${1}
    ${2} | ${[2, 1, 3, 2, 4, 3]} | ${0}
    ${3} | ${[7, 9, 3, 1]}       | ${2}
    ${4} | ${[1, 1000]}          | ${999}
    ${5} | ${[100, 150, 200]}    | ${50}
  `('Base test: $n', ({ strengthes, result }) => {
    expect(getDif(strengthes)).toBe(result);
  });
});
