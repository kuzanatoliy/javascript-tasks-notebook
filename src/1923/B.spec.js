const { isItPossilbeToWin } = require('./B');

describe('1923B. Monsters Attack!', () => {
  it.each`
    n    | arr                | x                    | k     | result
    ${1} | ${[1, 2, 3]}       | ${[-1, 2, 3]}        | ${2}  | ${'YES'}
    ${2} | ${[1, 1]}          | ${[-1, 1]}           | ${1}  | ${'NO'}
    ${3} | ${[3, 4, 2, 5]}    | ${[-3, -2, 1, 3]}    | ${10} | ${'YES'}
    ${4} | ${[2, 1, 3, 2, 5]} | ${[-3, -2, 3, 4, 5]} | ${3}  | ${'YES'}
    ${5} | ${[1, 2]}          | ${[1, 2]}            | ${1}  | ${'NO'}
  `('Base test: $n', ({ arr, x, k, result }) => {
    expect(isItPossilbeToWin(arr, x, k)).toBe(result);
  });
});
