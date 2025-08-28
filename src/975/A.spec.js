const { getCountOfRootWords } = require('./A');

describe('975A. Aramic script', () => {
  it.each`
    n    | words                              | result
    ${1} | ${['a', 'aa', 'aaa', 'ab', 'abb']} | ${2}
    ${2} | ${['amer', 'arem', 'mrea']}        | ${1}
  `('Base test: $n', ({ words, result }) => {
    expect(getCountOfRootWords(words)).toBe(result);
  });
});
