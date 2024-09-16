const { getCountOfOperations } = require('./A');

describe('1451A. Subtract or Divide', () => {
  it.each`
    n    | origin | result
    ${1} | ${1}   | ${0}
    ${2} | ${2}   | ${1}
    ${3} | ${3}   | ${2}
    ${4} | ${4}   | ${2}
    ${5} | ${6}   | ${2}
    ${6} | ${9}   | ${3}
  `('Base test: $n', ({ origin, result }) => {
    expect(getCountOfOperations(origin)).toBe(result);
  });
});
