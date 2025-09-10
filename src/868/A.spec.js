const { isItPossibleToConstructStr } = require('./A');

describe('868A. Bark to Unlock', () => {
  it.each`
    n    | target  | substrs                     | result
    ${1} | ${'ya'} | ${['ah', 'oy', 'to', 'ha']} | ${'YES'}
    ${2} | ${'hp'} | ${['ht', 'tp']}             | ${'NO'}
    ${3} | ${'ah'} | ${['ha']}                   | ${'YES'}
  `('Base test: $n', ({ target, substrs, result }) => {
    expect(isItPossibleToConstructStr(target, substrs)).toBe(result);
  });
});
