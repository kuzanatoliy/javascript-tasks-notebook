const { getOriginalString } = require('./B');

describe('1618B. Missing Bigram', () => {
  it.each`
    n    | bigrams                           | result
    ${1} | ${['ab', 'bb', 'ba', 'aa', 'ba']} | ${'abbaaba'}
    ${2} | ${['ab', 'ba', 'aa', 'ab', 'ba']} | ${'abaabba'}
    ${3} | ${['aa']}                         | ${'aaa'}
    ${4} | ${['bb', 'ab', 'bb']}             | ${'bbabb'}
  `('Base test: $n', ({ bigrams, result }) => {
    expect(getOriginalString(bigrams)).toStrictEqual(result);
  });
});
