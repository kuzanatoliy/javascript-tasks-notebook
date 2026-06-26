const { getHand } = require('./A');

describe('120A. Elevator', () => {
  it.each`
    n    | dor        | rail | result
    ${1} | ${'front'} | ${1} | ${'L'}
  `('Base test: $n', ({ dor, rail, result }) => {
    expect(getHand(dor, rail)).toBe(result);
  });
});
