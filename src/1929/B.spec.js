const { getCountOfCells } = require('./B');

describe('1929B. Sasha and the Drawing', () => {
  it.each`
    n    | num  | k     | result
    ${1} | ${3} | ${4}  | ${2}
    ${2} | ${3} | ${3}  | ${2}
    ${3} | ${3} | ${10} | ${6}
    ${4} | ${3} | ${9}  | ${5}
    ${5} | ${4} | ${7}  | ${4}
    ${6} | ${7} | ${11} | ${6}
    ${7} | ${2} | ${3}  | ${2}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfCells(num, k)).toBe(result);
  });
});
