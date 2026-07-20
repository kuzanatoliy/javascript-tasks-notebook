/* eslint-disable no-undefined */
const { last } = require('./last');

describe('Lodash: last function', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${3}
    ${2} | ${[]}        | ${undefined}
  `('Base test: $n', ({ arr, result }) => {
    expect(last(arr)).toBe(result);
  });
});
