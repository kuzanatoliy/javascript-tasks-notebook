const { getMinCountOfInvites } = require('./A');

describe('1966A. Card Exchange', () => {
  it.each`
    n    | array                             | k     | result
    ${1} | ${[4, 1, 1, 4, 4]}                | ${3}  | ${2}
    ${2} | ${[7]}                            | ${10} | ${1}
    ${3} | ${[4, 2, 1, 100, 5, 2, 3]}        | ${2}  | ${1}
    ${4} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${4}  | ${3}
    ${5} | ${[3, 8, 1, 48, 7]}               | ${2}  | ${5}
    ${6} | ${[10, 20, 30, 10, 20, 40]}       | ${2}  | ${1}
    ${7} | ${[10, 20, 30, 10, 20, 40]}       | ${3}  | ${6}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfInvites(array)).toBe(result);
  });
});
