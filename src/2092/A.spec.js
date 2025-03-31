const { getMaxPossiblePleasure } = require('./A');

describe('2092A. Kamilka and the Sheep', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3]}          | ${2}
    ${2} | ${[5, 4, 3, 2, 1]} | ${4}
    ${3} | ${[5, 6, 7]}       | ${2}
    ${4} | ${[1, 11, 10]}     | ${10}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxPossiblePleasure(arr)).toBe(result);
  });
});
