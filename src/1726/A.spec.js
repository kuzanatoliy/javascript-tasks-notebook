const { getDif } = require('./A');

describe('1726A. Mainak and Array', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[1, 3, 9, 11, 5, 7]} | ${10}
    ${2} | ${[20]}                | ${0}
    ${3} | ${[9, 99, 999]}        | ${990}
    ${4} | ${[2, 1, 8, 1]}        | ${7}
    ${5} | ${[2, 1, 5]}           | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getDif(arr)).toBe(result);
  });
});
