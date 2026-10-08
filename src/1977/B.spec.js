const { buildArray } = require('./B');

describe('1977B. Binary Colouring', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${[1]}
    ${2} | ${14} | ${[0, -1, 0, 0, 1]}
    ${3} | ${24} | ${[0, 0, 0, -1, 0, 1]}
    ${4} | ${15} | ${[-1, 0, 0, 0, 1]}
    ${5} | ${27} | ${[-1, 0, -1, 0, 0, 1]}
    ${6} | ${11} | ${[-1, 0, -1, 0, 1]}
    ${7} | ${19} | ${[-1, 0, 1, 0, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildArray(num)).toStrictEqual(result);
  });
});
