const { getReplaceOperationProps } = require('./A');

describe('1898A. Milica and String', () => {
  it.each`
    n    | str             | k    | result
    ${1} | ${'AAABB'}      | ${2} | ${[0]}
    ${2} | ${'AABAB'}      | ${3} | ${[1, [1, 'B']]}
    ${3} | ${'BBBBB'}      | ${0} | ${[1, [5, 'A']]}
    ${4} | ${'BAA'}        | ${0} | ${[1, [3, 'A']]}
    ${5} | ${'BBBABBBBAB'} | ${3} | ${[1, [6, 'A']]}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getReplaceOperationProps(str, k)).toStrictEqual(result);
  });
});
