const { getCountOfMoves } = require('./B');

describe('1391B. Fix You', () => {
  it.each`
    n    | matrix                                                                                                                                                                                                                                                                                        | result
    ${1} | ${[['R', 'R', 'D'], ['D', 'D', 'R'], ['R', 'R', 'C']]}                                                                                                                                                                                                                                        | ${1}
    ${2} | ${[['D', 'D', 'D', 'C']]}                                                                                                                                                                                                                                                                     | ${3}
    ${3} | ${[['R', 'D', 'D', 'D', 'D', 'D', 'R', 'R', 'R'], ['R', 'R', 'D', 'D', 'R', 'R', 'D', 'D', 'D'], ['R', 'R', 'D', 'R', 'D', 'R', 'R', 'D', 'R'], ['D', 'D', 'D', 'D', 'R', 'D', 'D', 'R', 'R'], ['D', 'R', 'R', 'D', 'R', 'D', 'D', 'D', 'R'], ['D', 'D', 'R', 'D', 'R', 'R', 'D', 'D', 'C']]} | ${9}
    ${4} | ${[['C']]}                                                                                                                                                                                                                                                                                    | ${0}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfMoves(matrix)).toBe(result);
  });
});
