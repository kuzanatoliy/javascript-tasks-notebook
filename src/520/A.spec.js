const { checkPangram } = require('./A');

describe('520A. Pangram', () => {
  it.each`
    n    | pangram                                  | result
    ${1} | ${'toosmallword'}                        | ${'NO'}
    ${2} | ${'TheQuickBrownFoxJumpsOverTheLazyDog'} | ${'YES'}
  `('Base test: $n', ({ pangram, result }) => {
    expect(checkPangram(pangram)).toStrictEqual(result);
  });
});
