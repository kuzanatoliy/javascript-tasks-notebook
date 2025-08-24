const { getCountOfExams } = require('./A');

describe('194A. Exams', () => {
  it.each`
    n    | num  | k     | result
    ${1} | ${4} | ${8}  | ${4}
    ${2} | ${4} | ${10} | ${2}
    ${3} | ${1} | ${3}  | ${0}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfExams(num, k)).toBe(result);
  });
});
