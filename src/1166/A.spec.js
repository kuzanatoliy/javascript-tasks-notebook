const { getCountOfPairs } = require('./A');

describe('1166A. Silent Classroom', () => {
  it.each`
    n    | names                                                                                  | result
    ${1} | ${['jorge', 'jose', 'oscar', 'jerry']}                                                 | ${1}
    ${2} | ${['kambei', 'gorobei', 'shichiroji', 'kyuzo', 'heihachi', 'katsushiro', 'kikuchiyo']} | ${2}
    ${3} | ${['mike', 'mike', 'mike', 'mike', 'mike']}                                            | ${4}
  `('Base test: $n', ({ names, result }) => {
    expect(getCountOfPairs(names)).toBe(result);
  });
});
