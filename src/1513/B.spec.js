const { getCountOfGoodPermutations } = require('./B');

describe('1513B. AND Sequences', () => {
  it.each`
    n    | arr                                                                 | result
    ${1} | ${[1, 1, 1]}                                                        | ${6}
    ${2} | ${[1, 2, 3, 4, 5]}                                                  | ${0}
    ${3} | ${[0, 2, 0, 3, 0]}                                                  | ${36}
    ${4} | ${[1, 3, 5, 1]}                                                     | ${4}
    ${5} | ${[17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]} | ${789741546}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfGoodPermutations(arr)).toBe(result);
  });
});
