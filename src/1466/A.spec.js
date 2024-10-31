const { getCountOfAreas } = require('./A');

describe('1466A. Bovine Dilemma', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[1, 2, 4, 5]}         | ${4}
    ${2} | ${[1, 3, 5]}            | ${2}
    ${3} | ${[2, 6, 8]}            | ${3}
    ${4} | ${[1, 2]}               | ${1}
    ${5} | ${[50]}                 | ${0}
    ${6} | ${[3, 4, 5, 6, 8]}      | ${5}
    ${7} | ${[1, 25, 26]}          | ${3}
    ${8} | ${[1, 2, 4, 8, 16, 32]} | ${15}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfAreas(arr)).toBe(result);
  });
});
