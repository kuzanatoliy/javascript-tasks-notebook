﻿const { hasEnoughFood } = require('./A');

describe('1675A. Food for Animals', () => {
  it.each`
    n    | a           | b           | c            | x            | y            | result
    ${1} | ${1}        | ${1}        | ${4}         | ${2}         | ${3}         | ${'YES'}
    ${2} | ${0}        | ${0}        | ${0}         | ${0}         | ${0}         | ${'YES'}
    ${3} | ${5}        | ${5}        | ${0}         | ${4}         | ${6}         | ${'NO'}
    ${4} | ${1}        | ${1}        | ${1}         | ${1}         | ${1}         | ${'YES'}
    ${5} | ${50000000} | ${50000000} | ${100000000} | ${100000000} | ${100000000} | ${'YES'}
    ${6} | ${0}        | ${0}        | ${0}         | ${100000000} | ${100000000} | ${'NO'}
    ${7} | ${1}        | ${3}        | ${2}         | ${2}         | ${5}         | ${'NO'}
  `('Base test: $n', ({ a, b, c, x, y, result }) => {
    expect(hasEnoughFood(a, b, c, x, y)).toBe(result);
  });
});