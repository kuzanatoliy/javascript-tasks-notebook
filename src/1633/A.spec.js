const { getDivirsedNumber } = require('./A');

describe('1633A. Div. 7', () => {
  it.each`
    n    | number | result
    ${1} | ${42}  | ${42}
    ${2} | ${23}  | ${21}
    ${3} | ${377} | ${371}
  `('Base test: $n', ({ number, result }) => {
    expect(getDivirsedNumber(number)).toBe(result);
  });
});
