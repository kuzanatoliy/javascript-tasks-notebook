const { getMaxScore } = require('./A');

describe('1733A. Planets', () => {
  it.each`
    n    | arr                                    | k    | result
    ${1} | ${[5, 6, 0]}                           | ${2} | ${11}
    ${2} | ${[7]}                                 | ${1} | ${7}
    ${3} | ${[7, 0, 4, 0, 4]}                     | ${3} | ${15}
    ${4} | ${[2, 7, 3, 4]}                        | ${3} | ${10}
    ${5} | ${[1000000000, 1000000000, 999999997]} | ${3} | ${2999999997}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxScore(array)).toBe(result);
  });
});
