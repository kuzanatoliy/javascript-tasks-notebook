const { checkEquation } = require('./A');

describe('339A. Helpful Maths', () => {
  it.each`
    n    | equation       | result
    ${1} | ${'3+2+1'}     | ${'1+2+3'}
    ${2} | ${'1+1+3+1+3'} | ${'1+1+1+3+3'}
    ${3} | ${'2'}         | ${'2'}
  `('Base test: $n', ({ equation, result }) => {
    expect(checkEquation(equation)).toBe(result);
  });
});
