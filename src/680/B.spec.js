const { getNumbersOfCriminals } = require('./B');

describe('680B. Bear and Finding Criminals', () => {
  it.each`
    n    | index | cities                | result
    ${1} | ${3}  | ${[1, 1, 1, 0, 1, 0]} | ${3}
    ${2} | ${2}  | ${[0, 0, 0, 1, 0]}    | ${1}
  `('Base test: $n', ({ index, cities, result }) => {
    expect(getNumbersOfCriminals(index, cities)).toBe(result);
  });
});
