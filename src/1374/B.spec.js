const { getMinNumber } = require('./B');

describe('1374B. Multiply by 2, divide by 6', () => {
  it.each`
    n    | number       | result
    ${1} | ${1}         | ${0}
    ${2} | ${2}         | ${-1}
    ${3} | ${3}         | ${2}
    ${4} | ${12}        | ${-1}
    ${5} | ${12345}     | ${-1}
    ${6} | ${15116544}  | ${12}
    ${7} | ${387420489} | ${36}
  `('Base test: $n', ({ number, result }) => {
    expect(getMinNumber(number)).toBe(result);
  });
});
