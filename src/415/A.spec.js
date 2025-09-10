const { getOrder } = require('./A');

describe('415A. Mashmokh and Lights', () => {
  it.each`
    n    | num  | arr                | result
    ${1} | ${5} | ${[4, 3, 1, 2]}    | ${[1, 1, 3, 4, 4]}
    ${2} | ${5} | ${[5, 4, 3, 2, 1]} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getOrder(num, arr)).toStrictEqual(result);
  });
});
