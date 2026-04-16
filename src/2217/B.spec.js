const { getCountOfOperations } = require('./B');

describe('2217B. Flip the Bit (Easy Version)', () => {
  it.each`
    n    | arr                                                    | k    | result
    ${1} | ${[0, 1, 0]}                                           | ${2} | ${2}
    ${2} | ${[1, 1, 1, 1, 1]}                                     | ${1} | ${0}
    ${3} | ${[0, 1, 0, 1, 0, 1]}                                  | ${3} | ${4}
    ${4} | ${[0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]} | ${5} | ${10}
    ${5} | ${[0]}                                                 | ${1} | ${0}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
