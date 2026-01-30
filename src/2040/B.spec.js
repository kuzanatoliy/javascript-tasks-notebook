const { getCountOfOperations } = require('./B');

describe('2040A. Game of Division', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${1}
    ${2} | ${2}  | ${2}
    ${3} | ${4}  | ${2}
    ${4} | ${20} | ${4}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfOperations(num)).toStrictEqual(result);
  });
});
