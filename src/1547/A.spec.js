﻿const { getCountOfMoves } = require('./A');

describe('1547A. Shortest Path with Obstacle', () => {
  it.each`
    n    | A             | B            | C               | result
    ${1} | ${[1, 1]}     | ${[3, 3]}    | ${[2, 2]}       | ${4}
    ${2} | ${[2, 5]}     | ${[2, 1]}    | ${[2, 3]}       | ${6}
    ${3} | ${[1000, 42]} | ${[1000, 1]} | ${[1000, 1000]} | ${41}
    ${4} | ${[1, 10]}    | ${[3, 10]}   | ${[2, 10]}      | ${4}
    ${5} | ${[3, 8]}     | ${[7, 8]}    | ${[3, 7]}       | ${4}
    ${6} | ${[2, 1]}     | ${[4, 1]}    | ${[1, 1]}       | ${2}
    ${7} | ${[1, 344]}   | ${[1, 10]}   | ${[1, 1]}       | ${334}
  `('Base test: $n', ({ A, B, C, result }) => {
    expect(getCountOfMoves(A, B, C)).toBe(result);
  });
});
