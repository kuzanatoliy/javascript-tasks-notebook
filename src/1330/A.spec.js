const { getPosition } = require('./A');

describe('1330A. Dreamoon and Ranking Collection', () => {
  it.each`
    n    | arr                                     | x      | result
    ${1} | ${[3, 1, 1, 5, 7, 10]}                  | ${2}   | ${5}
    ${2} | ${[100]}                                | ${100} | ${101}
    ${3} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${1}   | ${2}
    ${4} | ${[1]}                                  | ${1}   | ${2}
    ${5} | ${[80, 60, 40, 20]}                     | ${57}  | ${60}
  `('Base test: $n', ({ arr, x, result }) => {
    expect(getPosition(arr, x)).toBe(result);
  });
});
