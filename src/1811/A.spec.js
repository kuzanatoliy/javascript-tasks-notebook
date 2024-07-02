﻿const { getNewNumber } = require('./A');

describe('1811A. Musical Puzzle', () => {
  it.each`
    n     | string                   | number | result
    ${1}  | ${'76543'}               | ${4}   | ${'765443'}
    ${2}  | ${'1'}                   | ${0}   | ${'10'}
    ${3}  | ${'44'}                  | ${5}   | ${'544'}
    ${4}  | ${'666'}                 | ${6}   | ${'6666'}
    ${5}  | ${'13579'}               | ${6}   | ${'613579'}
    ${6}  | ${'97531'}               | ${8}   | ${'987531'}
    ${7}  | ${'9876543210123456789'} | ${4}   | ${'98765443210123456789'}
    ${8}  | ${'73737'}               | ${7}   | ${'773737'}
    ${9}  | ${'20000000'}            | ${1}   | ${'210000000'}
    ${10} | ${'7058959'}             | ${0}   | ${'70589590'}
    ${11} | ${'828127127732'}        | ${1}   | ${'8281271277321'}
  `('Base test: $n', ({ string, number, result }) => {
    expect(getNewNumber(string, number)).toBe(result);
  });
});