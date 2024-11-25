const { isItPossibleToColor } = require('./A');

describe('1984A. Strange Splitting', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1, 2, 2]}    | ${['YES', 'RBRR']}
    ${2} | ${[1, 2, 3, 4, 5]} | ${['YES', 'RBRRR']}
    ${3} | ${[3, 3, 3]}       | ${['NO']}
    ${4} | ${[1, 2, 2, 2]}    | ${['YES', 'RBRR']}
    ${5} | ${[1, 2, 2]}       | ${['YES', 'RBR']}
    ${6} | ${[1, 1, 2]}       | ${['YES', 'RBR']}
    ${7} | ${[1, 9, 84]}      | ${['YES', 'RBR']}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToColor(arr)).toStrictEqual(result);
  });
});
