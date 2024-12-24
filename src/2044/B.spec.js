const { getSecondString } = require('./B');

describe('2044B. Normal Problem', () => {
  it.each`
    n    | str              | result
    ${1} | ${'qwq'}         | ${'pwp'}
    ${2} | ${'ppppp'}       | ${'qqqqq'}
    ${3} | ${'pppwwwqqq'}   | ${'pppwwwqqq'}
    ${4} | ${'wqpqwpqwwqp'} | ${'qpwwpqwpqpw'}
    ${5} | ${'pqpqpqpq'}    | ${'pqpqpqpq'}
  `('Base test: $n', ({ str, result }) => {
    expect(getSecondString(str)).toBe(result);
  });
});
