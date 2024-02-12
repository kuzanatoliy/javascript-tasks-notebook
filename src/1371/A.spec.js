const { getCountOfSticks } = require('./A');

describe('1371A. Magical Sticks', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${2}   | ${1}
    ${3} | ${3}   | ${2}
    ${4} | ${4}   | ${2}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfSticks(number)).toBe(result);
  });
});
