const { getMEX } = require('./C');

describe('2185C. Shifted MEX', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[4]}                 | ${1}
    ${2} | ${[0, 1, 1, 2, 3]}     | ${4}
    ${3} | ${[1, 1]}              | ${1}
    ${4} | ${[4, 2, 3, 6]}        | ${3}
    ${5} | ${[2, 4, 1, 0, -1]}    | ${4}
    ${6} | ${[-1, 1, 2, 3, 5, 6]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMEX(arr)).toBe(result);
  });
});
