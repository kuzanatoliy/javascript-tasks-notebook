const { getIntervalMap } = require('./get-interval-map');

describe('getIntervalMap', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[]}                             | ${''}
    ${2} | ${[1, 2, 3, 6, 7, 9, 11, 12, 13]} | ${'1-3,6-7,9,11-13'}
    ${3} | ${[1, 1, 2, 2, 3, 3, 4, 4, 5, 5]} | ${'1-5'}
    ${4} | ${[1, 1]}                         | ${'1'}
    ${5} | ${[1, 2, 3, 6, 7, 9, 13]}         | ${'1-3,6-7,9,13'}
    ${5} | ${[1, 2, 3, 6, 7, 9, 11, 13]}     | ${'1-3,6-7,9,11,13'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getIntervalMap(arr)).toBe(result);
  });
});
