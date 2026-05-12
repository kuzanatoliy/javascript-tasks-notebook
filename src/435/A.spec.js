const { getCountOfBuses } = require('./A');

describe('435A. Queue on Bus Stop', () => {
  it.each`
    n    | m    | arr             | result
    ${1} | ${3} | ${[2, 3, 2, 1]} | ${3}
    ${2} | ${4} | ${[1, 2, 1]}    | ${1}
  `('Base test: $n', ({ m, arr, result }) => {
    expect(getCountOfBuses(m, arr)).toBe(result);
  });
});
