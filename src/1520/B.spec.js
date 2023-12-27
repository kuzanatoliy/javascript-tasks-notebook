const { getCountOfOrdinaryNumbers } = require('./B');

describe('1520B. Ordinary Numbers', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${2}   | ${2}
    ${3} | ${3}   | ${3}
    ${4} | ${4}   | ${4}
    ${5} | ${5}   | ${5}
    ${6} | ${100} | ${18}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfOrdinaryNumbers(number)).toBe(result);
  });
});
