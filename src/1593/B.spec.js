const { getCountOfOperations } = require('./B');

describe('1593B. Make it Divisible by 25', () => {
  it.each`
    n    | num          | result
    ${1} | ${'100'}     | ${0}
    ${2} | ${'71345'}   | ${3}
    ${3} | ${'3259'}    | ${1}
    ${4} | ${'50555'}   | ${3}
    ${5} | ${'2050047'} | ${2}
    ${6} | ${'510'}     | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfOperations(num)).toBe(result);
  });
});
