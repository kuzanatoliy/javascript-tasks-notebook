const { getCountOfSecondsToCross } = require('./C');

describe('1744C. Traffic Light', () => {
  it.each`
    n    | colour | pattern        | result
    ${1} | ${'r'} | ${'rggry'}     | ${3}
    ${2} | ${'g'} | ${'g'}         | ${0}
    ${3} | ${'r'} | ${'rrg'}       | ${2}
    ${4} | ${'y'} | ${'yrrgy'}     | ${4}
    ${5} | ${'r'} | ${'rgrgyrg'}   | ${1}
    ${6} | ${'y'} | ${'rrrgyyygy'} | ${4}
  `('Base test: $n', ({ colour, pattern, result }) => {
    expect(getCountOfSecondsToCross(colour, pattern)).toBe(result);
  });
});
