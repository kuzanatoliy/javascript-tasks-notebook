const { getState } = require('./A');

describe('1200A. Hotelier', () => {
  it.each`
    n    | map            | result
    ${1} | ${'LLRL1RL1'}  | ${'1010000011'}
    ${2} | ${'L0L0LLRR9'} | ${'1100000010'}
  `('Base test: $n', ({ map, result }) => {
    expect(getState(map)).toBe(result);
  });
});
