const { restoreArray } = require('./B');

describe('1991B. AND Reconstruction', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1]}          | ${[1, 1]}
    ${2} | ${[2, 0]}       | ${[2, 2, 0]}
    ${3} | ${[1, 2, 3]}    | ${[-1]}
    ${4} | ${[3, 5, 4, 2]} | ${[3, 7, 5, 6, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(restoreArray(arr)).toStrictEqual(result);
  });
});
