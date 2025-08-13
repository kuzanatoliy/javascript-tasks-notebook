const { isItPossibleToSplit } = require('./A');

describe('1107A. Digits Sequence Dividing', () => {
  it.each`
    n    | snum        | result
    ${1} | ${'654321'} | ${['YES', ['6', '54321']]}
    ${2} | ${'1337'}   | ${['YES', ['1', '337']]}
    ${3} | ${'33'}     | ${['NO']}
    ${4} | ${'2122'}   | ${['YES', ['2', '122']]}
  `('Base test: $n', ({ snum, result }) => {
    expect(isItPossibleToSplit(snum)).toStrictEqual(result);
  });
});
