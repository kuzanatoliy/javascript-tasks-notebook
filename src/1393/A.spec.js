const { getCountOfTurns } = require('./A');

describe('1393A. Rainbow Dash, Fluttershy and Chess Coloring', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${2}   | ${2}
    ${3} | ${3}   | ${2}
    ${4} | ${4}   | ${3}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfTurns(number)).toBe(result);
  });
});
