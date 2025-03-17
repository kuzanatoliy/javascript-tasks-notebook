const { getAnswer } = require('./A');

describe('49A. Sleuth', () => {
  it.each`
    n    | num                                                    | result
    ${1} | ${'Is it a melon?'}                                    | ${'NO'}
    ${2} | ${'Is it an apple?'}                                   | ${'YES'}
    ${3} | ${'Is   it an apple  and a  banana   simultaneouSLY?'} | ${'YES'}
  `('Base test: $n', ({ num, result }) => {
    expect(getAnswer(num)).toBe(result);
  });
});
