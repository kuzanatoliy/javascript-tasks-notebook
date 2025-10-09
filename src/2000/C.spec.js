const { isCorrectTemplate } = require('./C');

describe('2000C. Numeric String Template', () => {
  it.each`
    n    | template           | strs                               | result
    ${1} | ${[3, 5, 2, 1, 3]} | ${['abfda', 'afbfa']}              | ${['YES', 'NO']}
    ${2} | ${[1, 2]}          | ${['ab', 'abc', 'aa']}             | ${['YES', 'NO', 'NO']}
    ${3} | ${[5, -3, 5, -3]}  | ${['aaaa', 'bcbc', 'aba', 'cbcb']} | ${['NO', 'YES', 'NO', 'YES']}
    ${4} | ${[1, 2]}          | ${['aa']}                          | ${['NO']}
  `('Base test: $n', ({ template, strs, result }) => {
    expect(isCorrectTemplate(template, strs)).toStrictEqual(result);
  });
});
