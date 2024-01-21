const { getMinPossibleNumber } = require('./A');

describe('1839A. The Good Array', () => {
  it.each`
    n    | length | k    | result
    ${1} | ${3}   | ${2} | ${2}
    ${2} | ${5}   | ${2} | ${3}
    ${3} | ${9}   | ${3} | ${4}
    ${4} | ${7}   | ${1} | ${7}
    ${5} | ${10}  | ${4} | ${4}
    ${6} | ${9}   | ${5} | ${3}
    ${7} | ${8}   | ${8} | ${2}
  `('Base test: $n', ({ length, k, result }) => {
    expect(getMinPossibleNumber(length, k)).toBe(result);
  });
});
