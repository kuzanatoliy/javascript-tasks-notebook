const { getMinNumber } = require('./A');

describe('2126A. Only One Digit', () => {
  it.each`
    n    | num    | result
    ${1} | ${6}   | ${6}
    ${2} | ${96}  | ${6}
    ${3} | ${78}  | ${7}
    ${4} | ${122} | ${1}
    ${5} | ${969} | ${6}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinNumber(num)).toBe(result);
  });
});
