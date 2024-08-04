const { getTheLargestPossibleInteger } = require('./A');

describe('1768A. Greatest Convex', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${2}
    ${2} | ${6}   | ${5}
    ${3} | ${8}   | ${7}
    ${4} | ${10}  | ${9}
  `('Base test: $n', ({ number, result }) => {
    expect(getTheLargestPossibleInteger(number)).toBe(result);
  });
});
