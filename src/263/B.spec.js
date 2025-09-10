const { getCountOfDays } = require('./B');

describe('263B. Squares', () => {
  it.each`
    n    | arr              | k     | result
    ${1} | ${[5, 1, 3, 4]}  | ${3}  | ${[3, 0]}
    ${2} | ${[2, 4, 1]}     | ${1}  | ${[4, 0]}
    ${3} | ${[5, 1, 10, 2]} | ${50} | ${[-1]}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfDays(arr, k)).toStrictEqual(result);
  });
});
