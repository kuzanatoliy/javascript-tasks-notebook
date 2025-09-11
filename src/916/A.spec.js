const { getDelay } = require('./A');

describe('916A. Jamie and Alarm Snooze', () => {
  it.each`
    n    | num   | hh    | mm    | result
    ${1} | ${3}  | ${11} | ${23} | ${2}
    ${2} | ${5}  | ${1}  | ${7}  | ${0}
    ${2} | ${26} | ${4}  | ${58} | ${26}
  `('Base test: $n', ({ num, hh, mm, result }) => {
    expect(getDelay(num, hh, mm)).toBe(result);
  });
});
