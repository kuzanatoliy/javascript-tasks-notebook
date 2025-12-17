const { getResult } = require('./A');

describe('2172A. ASCII Art Contest', () => {
  it.each`
    n    | arr              | result
    ${1} | ${[88, 94, 95]}  | ${'final 94'}
    ${2} | ${[100, 80, 81]} | ${'check again'}
    ${3} | ${[98, 99, 98]}  | ${'final 98'}
    ${4} | ${[95, 86, 85]}  | ${'check again'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getResult(arr)).toBe(result);
  });
});
