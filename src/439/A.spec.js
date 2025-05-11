const { isItPossibleToOrganize } = require('./A');

describe('439A. Devu, the Singer and Churu, the Joker', () => {
  it.each`
    n    | arr                               | d      | result
    ${1} | ${[2, 2, 1]}                      | ${30}  | ${5}
    ${2} | ${[2, 1, 1]}                      | ${20}  | ${-1}
    ${3} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${100} | ${18}
  `('Base test: $n', ({ arr, d, result }) => {
    expect(isItPossibleToOrganize(arr, d)).toBe(result);
  });
});
