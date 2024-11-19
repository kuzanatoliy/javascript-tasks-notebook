const { getColors } = require('./D');

describe('1837D. Bracket Coloring', () => {
  it.each`
    n    | str                 | result
    ${1} | ${'((())))('}       | ${[2, [1, 1, 1, 1, 1, 1, 2, 2]]}
    ${2} | ${'(())'}           | ${[1, [1, 1, 1, 1]]}
    ${3} | ${'))(('}           | ${[1, [1, 1, 1, 1]]}
    ${4} | ${'(()'}            | ${[-1]}
    ${5} | ${'()()((()))(())'} | ${[1, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]}
  `('Base test: $n', ({ str, result }) => {
    expect(getColors(str)).toStrictEqual(result);
  });
});
