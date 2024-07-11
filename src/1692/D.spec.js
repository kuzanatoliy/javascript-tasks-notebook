const { getCountOfPalindromTimes } = require('./D');

describe('1692D. The Clock', () => {
  it.each`
    n    | time       | step    | result
    ${1} | ${'03:12'} | ${360}  | ${1}
    ${2} | ${'00:00'} | ${1}    | ${16}
    ${3} | ${'13:22'} | ${2}    | ${10}
    ${4} | ${'15:15'} | ${10}   | ${0}
    ${5} | ${'11:11'} | ${1440} | ${1}
    ${6} | ${'22:30'} | ${27}   | ${1}
  `('Base test: $n', ({ time, step, result }) => {
    expect(getCountOfPalindromTimes(time, step)).toStrictEqual(result);
  });
});
