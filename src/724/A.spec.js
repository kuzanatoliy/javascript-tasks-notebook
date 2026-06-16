const { isItPossible } = require('./A');

describe('724A. Checking the Calendar', () => {
  it.each`
    n    | day1        | day2         | result
    ${1} | ${'monday'} | ${'tuesday'} | ${'NO'}
    ${2} | ${'sunday'} | ${'sunday'}  | ${'YES'}
    ${3} | ${'sunday'} | ${'tuesday'} | ${'YES'}
  `('Base test: $n', ({ day1, day2, result }) => {
    expect(isItPossible(day1, day2)).toBe(result);
  });
});
