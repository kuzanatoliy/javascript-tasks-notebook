/* eslint-disable no-undefined */
const { first } = require('./first');

describe('Lodash: first function', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${1}
    ${2} | ${[]}        | ${undefined}
  `('Base test: $n', ({ arr, size, result }) => {
    expect(first(arr, size)).toStrictEqual(result);
  });
});
