const { getCountOfNumbers } = require('./A');

describe('1517A. Sum of 2050', () => {
  it.each`
    n    | array            | result
    ${1} | ${'205'}         | ${-1}
    ${2} | ${'2050'}        | ${1}
    ${3} | ${'4100'}        | ${2}
    ${4} | ${'20500'}       | ${1}
    ${5} | ${'22550'}       | ${2}
    ${6} | ${'25308639900'} | ${36}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfNumbers(array)).toStrictEqual(result);
  });
});
