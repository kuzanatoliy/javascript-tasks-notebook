const { isOrderExisted } = require('./A');

describe('2257A. Creating Abbreviations', () => {
  it.each`
    n    | letters                                                    | abs                          | result
    ${1} | ${['apple', 'grand', 'banana', 'great', 'cherry', 'good']} | ${['AG', 'BG', 'CG', 'ABC']} | ${'YES'}
    ${2} | ${['apple']}                                               | ${['A']}                     | ${'YES'}
    ${3} | ${['apple']}                                               | ${['A', 'AA']}               | ${'YES'}
    ${4} | ${['apple', 'avocado']}                                    | ${['B', 'BA']}               | ${'NO'}
  `('Base test: $n', ({ letters, abs, result }) => {
    expect(isOrderExisted(letters, abs)).toBe(result);
  });
});
