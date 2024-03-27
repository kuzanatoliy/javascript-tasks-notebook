const { getMinNumbersOfTheDays } = require('./C');

describe('479C. Exams', () => {
  it.each`
    n    | exams | exams                       | result
    ${1} | ${2}  | ${[[5, 2], [3, 1], [4, 2]]} | ${2}
    ${2} | ${4}  | ${[[6, 1], [5, 2], [4, 3]]} | ${6}
  `('Base test: $n', ({ exams, towers, result }) => {
    expect(getMinNumbersOfTheDays(exams, towers)).toStrictEqual(result);
  });
});
