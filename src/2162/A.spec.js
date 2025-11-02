const { getMaxSubarrAverage } = require('./A');

describe('2162A. Beautiful Average', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 3, 3, 3]}    | ${3}
    ${2} | ${[7, 1, 6, 9, 9]} | ${9}
    ${3} | ${[3, 4, 4, 4, 3]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSubarrAverage(arr)).toBe(result);
  });
});
