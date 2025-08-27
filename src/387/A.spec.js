const { getDifference } = require('./A');

describe('387A. George and Sleep', () => {
  it.each`
    n    | currTime   | startTime  | result
    ${1} | ${'05:50'} | ${'05:44'} | ${'00:06'}
    ${2} | ${'00:00'} | ${'01:00'} | ${'23:00'}
    ${3} | ${'00:01'} | ${'00:00'} | ${'00:01'}
  `('Base test: $n', ({ currTime, startTime, result }) => {
    expect(getDifference(currTime, startTime)).toStrictEqual(result);
  });
});
