const { getPalindrome } = require('./A');

describe('1758A. SSeeeeiinngg DDoouubbllee', () => {
  it.each`
    n    | str                    | result
    ${1} | ${'a'}                 | ${'aa'}
    ${2} | ${'sururu'}            | ${'sururuururus'}
    ${3} | ${'errorgorn'}         | ${'errorgornnrogrorre'}
    ${4} | ${'anutforajaroftuna'} | ${'anutforajaroftunaanutforajaroftuna'}
  `('Base test: $n', ({ str, result }) => {
    expect(getPalindrome(str)).toBe(result);
  });
});
