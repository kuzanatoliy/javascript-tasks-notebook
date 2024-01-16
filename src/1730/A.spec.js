const { getMinCost } = require('./A');

describe('1730A. Planets', () => {
  it.each`
    n    | cost   | planets                           | result
    ${1} | ${1}   | ${[2, 1, 4, 5, 2, 4, 5, 5, 1, 2]} | ${4}
    ${2} | ${2}   | ${[3, 2, 1, 2, 2]}                | ${4}
    ${3} | ${2}   | ${[1, 1]}                         | ${2}
    ${4} | ${1}   | ${[1, 2]}                         | ${2}
    ${5} | ${100} | ${[1]}                            | ${1}
  `('Base test: $n', ({ cost, planets, result }) => {
    expect(getMinCost(cost, planets)).toBe(result);
  });
});
