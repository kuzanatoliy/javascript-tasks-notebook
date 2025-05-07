const { getInterval } = require('./B');

describe('1828B. Permutation Swap', () => {
  it.each`
    n    | arr                                    | result
    ${1} | ${[3, 1, 2]}                           | ${1}
    ${2} | ${[3, 4, 1, 2]}                        | ${2}
    ${3} | ${[4, 2, 6, 7, 5, 3, 1]}               | ${3}
    ${4} | ${[1, 6, 7, 4, 9, 2, 3, 8, 5]}         | ${4}
    ${5} | ${[1, 5, 3, 4, 2, 6]}                  | ${3}
    ${6} | ${[3, 10, 5, 2, 9, 6, 7, 8, 1, 4]}     | ${2}
    ${7} | ${[1, 11, 6, 4, 8, 3, 7, 5, 9, 10, 2]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getInterval(arr)).toBe(result);
  });
});
