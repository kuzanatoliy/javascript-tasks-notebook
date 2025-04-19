const { getScores } = require('./F');

describe('1773F. Football', () => {
  it.each`
    n    | num  | a    | b    | result
    ${1} | ${3} | ${2} | ${4} | ${[0, '1:0', '1:0', '0:4']}
    ${2} | ${1} | ${2} | ${2} | ${[1, '2:2']}
    ${3} | ${4} | ${0} | ${7} | ${[0, '0:1', '0:1', '0:1', '0:4']}
    ${4} | ${6} | ${3} | ${1} | ${[2, '1:0', '1:0', '1:0', '0:1', '0:0', '0:0']}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getScores(num, a, b)).toStrictEqual(result);
  });
});
