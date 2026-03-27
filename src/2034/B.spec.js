const { getMinCost } = require('./B');

describe("2034A. King Keykhosrow's Mystery", () => {
  it.each`
    n    | m    | k    | map         | result
    ${1} | ${1} | ${1} | ${'10101'}  | ${2}
    ${2} | ${2} | ${1} | ${'10101'}  | ${0}
    ${3} | ${3} | ${2} | ${'000000'} | ${1}
    ${4} | ${1} | ${1} | ${'00'}     | ${2}
  `('Base test: $n', ({ m, k, map, result }) => {
    expect(getMinCost(m, k, map)).toBe(result);
  });
});
