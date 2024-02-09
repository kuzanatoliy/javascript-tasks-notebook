const { getMinutes } = require('./A');

describe('1283A. Divisibility Problem', () => {
  it.each`
    n    | hours | minutes | result
    ${1} | ${23} | ${55}   | ${5}
    ${2} | ${23} | ${0}    | ${60}
    ${3} | ${0}  | ${1}    | ${1439}
    ${4} | ${4}  | ${20}   | ${1180}
    ${5} | ${23} | ${59}   | ${1}
  `('Base test: $n', ({ hours, minutes, result }) => {
    expect(getMinutes(hours, minutes)).toBe(result);
  });
});
