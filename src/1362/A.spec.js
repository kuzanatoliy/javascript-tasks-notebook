﻿const { getCountOfMoves } = require('./A');

describe('1362A. Johnny and Ancient Computer', () => {
  it.each`
    n     | a                       | b                       | result
    ${1}  | ${10n}                  | ${5n}                   | ${1}
    ${2}  | ${11n}                  | ${44n}                  | ${1}
    ${3}  | ${17n}                  | ${21n}                  | ${-1}
    ${4}  | ${1n}                   | ${1n}                   | ${0}
    ${5}  | ${96n}                  | ${3n}                   | ${2}
    ${6}  | ${2n}                   | ${128n}                 | ${2}
    ${7}  | ${1001n}                | ${1100611139403776n}    | ${14}
    ${8}  | ${1000000000000000000n} | ${1000000000000000000n} | ${0}
    ${9}  | ${7n}                   | ${1n}                   | ${-1}
    ${10} | ${10n}                  | ${8n}                   | ${-1}
    ${11} | ${18n}                  | ${6n}                   | ${-1}
    ${12} | ${2n}                   | ${12n}                  | ${-1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfMoves(a, b)).toBe(result);
  });
});