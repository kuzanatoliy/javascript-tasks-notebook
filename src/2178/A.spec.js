const { isItPossibleToReduce } = require('./A');

describe('2178A. Yes or Yes', () => {
  it.each`
    n    | str         | result
    ${1} | ${'YY'}     | ${'NO'}
    ${2} | ${'NN'}     | ${'YES'}
    ${3} | ${'NNY'}    | ${'YES'}
    ${4} | ${'YYYNY'}  | ${'NO'}
    ${5} | ${'NNNNN'}  | ${'YES'}
    ${6} | ${'YYYYYY'} | ${'NO'}
    ${7} | ${'YNNNNN'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToReduce(str)).toBe(result);
  });
});
