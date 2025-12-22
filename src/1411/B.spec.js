const { getFairNumber } = require('./B');

describe('1411B. Fair Numbers', () => {
  it.each`
    n    | num                     | result
    ${1} | ${1n}                   | ${1n}
    ${2} | ${282n}                 | ${288n}
    ${3} | ${1234567890n}          | ${1234568040n}
    ${4} | ${1000000000000000000n} | ${1000000000000000000n}
  `('Base test: $n', ({ num, result }) => {
    expect(getFairNumber(num)).toBe(result);
  });
});
