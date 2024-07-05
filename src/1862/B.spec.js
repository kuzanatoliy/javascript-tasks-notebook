const { getInitArray } = require('./B');

describe('1862B. Sequence Game', () => {
  it.each`
    n    | strings            | result
    ${1} | ${[4, 6, 3]}       | ${[4, 6, 3, 3]}
    ${2} | ${[1, 2, 3]}       | ${[1, 2, 3]}
    ${3} | ${[1, 7, 9, 5, 7]} | ${[1, 7, 9, 5, 5, 7]}
    ${4} | ${[144]}           | ${[144]}
    ${5} | ${[1, 1]}          | ${[1, 1]}
    ${6} | ${[1, 2, 2, 1, 1]} | ${[1, 2, 2, 1, 1, 1]}
  `('Base test: $n', ({ strings, result }) => {
    expect(getInitArray(strings)).toStrictEqual(result);
  });
});
