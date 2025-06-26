const { isItPossibleToBuildGarland } = require('./A');

describe('1279A. New Year Garland', () => {
  it.each`
    n    | r             | g            | b            | result
    ${1} | ${3}          | ${3}         | ${3}         | ${'YES'}
    ${2} | ${1}          | ${10}        | ${2}         | ${'NO'}
    ${3} | ${2}          | ${1}         | ${1}         | ${'YES'}
    ${4} | ${1000000000} | ${500000000} | ${499999999} | ${'YES'}
  `('Base test: $n', ({ r, g, b, result }) => {
    expect(isItPossibleToBuildGarland(r, g, b)).toBe(result);
  });
});
