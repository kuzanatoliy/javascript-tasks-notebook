const { getCountOfNumbers } = require('./B');

describe('1619B. Squares and Cubes', () => {
  it.each`
    n    | number        | result
    ${1} | ${10}         | ${4}
    ${2} | ${1}          | ${1}
    ${3} | ${25}         | ${6}
    ${4} | ${1000000000} | ${32591}
    ${5} | ${999999999}  | ${32590}
    ${6} | ${500000000}  | ${23125}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfNumbers(number)).toBe(result);
  });
});
