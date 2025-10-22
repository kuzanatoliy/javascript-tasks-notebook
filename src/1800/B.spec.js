const { getMaxIncome } = require('./B');

describe('1800B. Count the Number of Pairs', () => {
  it.each`
    n    | str              | k    | result
    ${1} | ${'aAaaBACacbE'} | ${2} | ${5}
    ${2} | ${'ab'}          | ${2} | ${0}
    ${3} | ${'aaBB'}        | ${1} | ${1}
    ${4} | ${'abBAcC'}      | ${0} | ${3}
    ${5} | ${'cbccb'}       | ${3} | ${2}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getMaxIncome(str, k)).toBe(result);
  });
});
