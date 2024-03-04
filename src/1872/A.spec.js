const { getMinNumbersOfMoves } = require('./A');

describe('1872A. To My Critics', () => {
  it.each`
    n    | array            | result
    ${1} | ${[3, 7, 2]}     | ${1}
    ${2} | ${[17, 4, 3]}    | ${3}
    ${3} | ${[17, 17, 1]}   | ${0}
    ${4} | ${[17, 21, 100]} | ${1}
    ${5} | ${[1, 100, 1]}   | ${50}
    ${6} | ${[97, 4, 3]}    | ${16}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinNumbersOfMoves(array)).toBe(result);
  });
});
