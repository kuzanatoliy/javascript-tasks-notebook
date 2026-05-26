const { getResultScore } = require('./A');

describe('604A. Uncowed Forces', () => {
  it.each`
    n    | m                            | w                   | h          | result
    ${1} | ${[20, 40, 60, 80, 100]}     | ${[0, 1, 2, 3, 4]}  | ${[1, 0]}  | ${4900}
    ${2} | ${[119, 119, 119, 119, 119]} | ${[0, 0, 0, 0, 0]}  | ${[10, 0]} | ${4930}
    ${3} | ${[56, 56, 96, 105, 107]}    | ${[4, 9, 10, 4, 8]} | ${[2, 1]}  | ${3104}
  `('Base test: $n', ({ m, w, h, result }) => {
    expect(getResultScore(m, w, h)).toBe(result);
  });
});
