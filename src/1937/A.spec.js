const { getPosition } = require('./A');

describe('1937A. Shuffle Party', () => {
  it.each`
    n    | str          | result
    ${1} | ${1}         | ${1}
    ${2} | ${4}         | ${4}
    ${3} | ${5}         | ${4}
    ${4} | ${120240229} | ${67108864}
  `('Base test: $n', ({ str, result }) => {
    expect(getPosition(str)).toBe(result);
  });
});
