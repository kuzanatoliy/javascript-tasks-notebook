﻿const { getDominantPiranha } = require('./C');

describe('1433C. Dominant Piranha', () => {
  it.each`
    n    | piranhas           | result
    ${1} | ${[5, 3, 4, 4, 5]} | ${1}
    ${2} | ${[1, 1, 1]}       | ${-1}
    ${3} | ${[4, 4, 3, 4, 4]} | ${2}
    ${4} | ${[5, 5, 4, 3, 2]} | ${2}
    ${5} | ${[1, 1, 2]}       | ${3}
    ${6} | ${[5, 4, 3, 5, 5]} | ${1}
  `('Base test: $n', ({ piranhas, result }) => {
    expect(getDominantPiranha(piranhas)).toBe(result);
  });
});
