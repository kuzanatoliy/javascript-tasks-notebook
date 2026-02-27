const { getFirstMoment } = require('./A');

describe('698A. Launch of Collider', () => {
  it.each`
    n    | map       | arr              | result
    ${1} | ${'RLRL'} | ${[2, 4, 6, 10]} | ${1}
    ${2} | ${'LLR'}  | ${[40, 50, 60]}  | ${-1}
  `('Base test: $n', ({ map, arr, result }) => {
    expect(getFirstMoment(map, arr)).toBe(result);
  });
});
