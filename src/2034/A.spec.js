const { getSmallestInteger } = require('./A');

describe("2034A. King Keykhosrow's Mystery", () => {
  it.each`
    n    | num    | m      | result
    ${1} | ${4}   | ${6}   | ${12}
    ${2} | ${472} | ${896} | ${52864}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getSmallestInteger(num, m)).toBe(result);
  });
});
