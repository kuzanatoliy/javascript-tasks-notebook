const { getTime } = require('./A');

describe('1607A. Linear Keyboard', () => {
  it.each`
    n    | keyboard                        | word                                                    | result
    ${1} | ${'abcdefghijklmnopqrstuvwxyz'} | ${'hello'}                                              | ${13}
    ${2} | ${'abcdefghijklmnopqrstuvwxyz'} | ${'i'}                                                  | ${0}
    ${3} | ${'abcdefghijklmnopqrstuvwxyz'} | ${'codeforces'}                                         | ${68}
    ${4} | ${'qwertyuiopasdfghjklzxcvbnm'} | ${'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'} | ${0}
    ${5} | ${'qwertyuiopasdfghjklzxcvbnm'} | ${'abacaba'}                                            | ${74}
  `('Base test: $n', ({ keyboard, word, result }) => {
    expect(getTime(keyboard, word)).toBe(result);
  });
});
