const { getMaxRectangle } = require('./B');

describe("1820B. JoJo's Incredible Adventures", () => {
  it.each`
    n    | str         | result
    ${1} | ${'0'}      | ${0}
    ${2} | ${'1'}      | ${1}
    ${3} | ${'11'}     | ${4}
    ${4} | ${'101'}    | ${2}
    ${5} | ${'011110'} | ${6}
    ${6} | ${'101010'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getMaxRectangle(str)).toBe(result);
  });
});
