const { getCountOfOverMarks } = require('./A');

describe('810A. Straight «A»', () => {
  it.each`
    n    | score | marks        | result
    ${1} | ${10} | ${[8, 9]}    | ${4}
    ${2} | ${5}  | ${[4, 4, 4]} | ${3}
  `('Base test: $n', ({ score, marks, result }) => {
    expect(getCountOfOverMarks(score, marks)).toBe(result);
  });
});
