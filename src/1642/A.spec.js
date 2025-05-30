﻿const { getDistance } = require('./A');

describe('1642A. Hard Way', () => {
  it.each`
    n    | x1    | y1    | x2    | y2   | x3    | y3   | result
    ${1} | ${8}  | ${10} | ${10} | ${4} | ${6}  | ${2} | ${0}
    ${2} | ${4}  | ${6}  | ${0}  | ${1} | ${4}  | ${2} | ${0}
    ${3} | ${14} | ${1}  | ${11} | ${2} | ${13} | ${2} | ${2}
    ${4} | ${0}  | ${0}  | ${4}  | ${0} | ${2}  | ${4} | ${0}
    ${5} | ${0}  | ${1}  | ${1}  | ${1} | ${0}  | ${0} | ${1}
  `('Base test: $n', ({ x1, y1, x2, y2, x3, y3, result }) => {
    expect(getDistance(x1, y1, x2, y2, x3, y3)).toBe(result);
  });
});
