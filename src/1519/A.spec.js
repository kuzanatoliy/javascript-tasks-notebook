const { isItPossibleToCreate } = require('./A');

describe('1519A. Red and Blue Beans', () => {
  it.each`
    n    | r    | b    | k    | result
    ${1} | ${1} | ${1} | ${0} | ${'YES'}
    ${2} | ${2} | ${7} | ${3} | ${'YES'}
    ${3} | ${6} | ${1} | ${4} | ${'NO'}
    ${4} | ${5} | ${4} | ${0} | ${'NO'}
  `('Base test: $n', ({ r, b, k, result }) => {
    expect(isItPossibleToCreate(r, b, k)).toBe(result);
  });
});
