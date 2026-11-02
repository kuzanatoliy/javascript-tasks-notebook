const { getScore } = require('./A');

describe("2271A. Hey, It's Me, Souvlakity", () => {
  it.each`
    n    | map          | result
    ${1} | ${'01'}      | ${0}
    ${2} | ${'111'}     | ${2}
    ${3} | ${'1100'}    | ${1}
    ${4} | ${'11111'}   | ${4}
    ${5} | ${'101010'}  | ${4}
    ${6} | ${'1101001'} | ${6}
  `('Base test: $n', ({ map, result }) => {
    expect(getScore(map)).toBe(result);
  });
});
