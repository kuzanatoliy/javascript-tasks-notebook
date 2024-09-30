const { getFinalNumber } = require('./B');

describe('2003A. Turtle and Good arrayings', () => {
  it.each`
    n    | array                               | result
    ${1} | ${[1, 2]}                           | ${2}
    ${2} | ${[1, 1, 2]}                        | ${1}
    ${3} | ${[1, 2, 3]}                        | ${2}
    ${4} | ${[3, 1, 2, 2, 3]}                  | ${2}
    ${5} | ${[10, 2, 5, 2, 7, 9, 2, 5, 10, 7]} | ${7}
  `('Base test: $n', ({ array, result }) => {
    expect(getFinalNumber(array)).toBe(result);
  });
});
