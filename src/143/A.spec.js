const { getMatrix } = require('./A');

describe('143A. Help Vasilisa the Wise 2', () => {
  it.each`
    n    | r1    | r2    | c1    | c2    | d1    | d2    | result
    ${1} | ${3}  | ${7}  | ${4}  | ${6}  | ${5}  | ${5}  | ${[[1, 2], [3, 4]]}
    ${2} | ${11} | ${10} | ${13} | ${8}  | ${5}  | ${16} | ${[[4, 7], [9, 1]]}
    ${3} | ${1}  | ${2}  | ${3}  | ${4}  | ${5}  | ${6}  | ${[[-1]]}
    ${4} | ${10} | ${10} | ${10} | ${10} | ${10} | ${10} | ${[[-1]]}
  `('Base test: $n', ({ r1, r2, c1, c2, d1, d2, result }) => {
    expect(getMatrix(r1, r2, c1, c2, d1, d2)).toStrictEqual(result);
  });
});
