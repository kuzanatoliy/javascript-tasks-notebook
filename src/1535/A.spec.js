const { isFairPlayoff } = require('./A');

describe('1535A. Fair Playoff', () => {
  it.each`
    n    | powers          | result
    ${1} | ${[3, 7, 9, 5]} | ${'YES'}
    ${2} | ${[4, 5, 6, 9]} | ${'NO'}
    ${3} | ${[5, 3, 8, 1]} | ${'YES'}
    ${4} | ${[6, 5, 3, 2]} | ${'NO'}
  `('Base test: $n', ({ powers, result }) => {
    expect(isFairPlayoff(powers)).toBe(result);
  });
});
