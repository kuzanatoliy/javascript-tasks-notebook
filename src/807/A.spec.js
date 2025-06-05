const { getTypeOfContest } = require('./A');

describe('807A. Is it rated?', () => {
  it.each`
    n    | rates                                                                                   | result
    ${1} | ${[[3060, 3060], [2194, 2194], [2876, 2903], [2624, 2624], [3007, 2991], [2884, 2884]]} | ${'rated'}
    ${2} | ${[[1500, 1500], [1300, 1300], [1200, 1200], [1400, 1400]]}                             | ${'unrated'}
    ${3} | ${[[3123, 3123], [2777, 2777], [2246, 2246], [2246, 2246], [1699, 1699]]}               | ${'maybe'}
  `('Base test: $n', ({ rates, result }) => {
    expect(getTypeOfContest(rates)).toBe(result);
  });
});
