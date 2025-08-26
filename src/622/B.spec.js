const { getNextTime } = require('./B');

describe('622B. The Time', () => {
  it.each`
    n    | time       | minutes | result
    ${1} | ${'23:59'} | ${10}   | ${'00:09'}
    ${2} | ${'20:20'} | ${121}  | ${'22:21'}
    ${3} | ${'10:10'} | ${0}    | ${'10:10'}
  `('Base test: $n', ({ time, minutes, result }) => {
    expect(getNextTime(time, minutes)).toBe(result);
  });
});
