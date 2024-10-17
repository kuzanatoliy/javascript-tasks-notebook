const { getCountOfDestroyedSheeps } = require('./C');

describe('1955C. Inhabitant of the Deep Sea', () => {
  it.each`
    n    | arr                | k     | result
    ${1} | ${[1, 2, 4, 3]}    | ${5}  | ${2}
    ${2} | ${[1, 2, 4, 3]}    | ${6}  | ${3}
    ${3} | ${[2, 7, 1, 8, 2]} | ${20} | ${5}
    ${4} | ${[3, 2]}          | ${2}  | ${0}
    ${5} | ${[1, 5]}          | ${15} | ${2}
    ${6} | ${[5, 2]}          | ${7}  | ${2}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfDestroyedSheeps(arr, k)).toBe(result);
  });
});
