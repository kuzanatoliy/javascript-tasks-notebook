const { isFollowingNumber } = require('./A');

describe("80A. Panoramix's Prediction", () => {
  it.each`
    n    | first | second | result
    ${1} | ${3}  | ${5}   | ${'YES'}
    ${2} | ${7}  | ${11}  | ${'YES'}
    ${3} | ${7}  | ${9}   | ${'NO'}
  `('Base test: $n', ({ first, second, result }) => {
    expect(isFollowingNumber(first, second)).toBe(result);
  });
});
