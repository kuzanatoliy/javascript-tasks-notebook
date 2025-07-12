const { getParity } = require('./A');

describe('1110A. Parity', () => {
  it.each`
    n    | arr                            | b     | result
    ${1} | ${[3, 2, 7]}                   | ${13} | ${'even'}
    ${2} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${10} | ${'odd'}
    ${3} | ${[32, 92, 85, 74, 4]}         | ${99} | ${'odd'}
    ${4} | ${[1, 0]}                      | ${2}  | ${'even'}
  `('Base test: $n', ({ arr, b, result }) => {
    expect(getParity(arr, b)).toBe(result);
  });
});
