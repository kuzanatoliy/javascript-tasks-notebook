const { getCountOfOperations } = require('./A');

describe('2110A. Fashionable Array', () => {
  it.each`
    n    | snum                        | result
    ${1} | ${[5, 2]}                   | ${1}
    ${2} | ${[3, 1, 4, 1, 5, 9, 2]}    | ${0}
    ${3} | ${[2, 7, 4, 6, 9, 11, 5]}   | ${2}
    ${4} | ${[1, 2, 1]}                | ${1}
    ${5} | ${[2, 1]}                   | ${1}
    ${6} | ${[8, 6, 3, 6, 4, 1, 1, 6]} | ${3}
  `('Base test: $n', ({ snum, result }) => {
    expect(getCountOfOperations(snum)).toBe(result);
  });
});
