/* eslint-disable no-undefined */
const { head } = require('./head');

describe('Lodash: head function', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${1}
    ${2} | ${[]}        | ${undefined}
  `('Base test: $n', ({ arr, size, result }) => {
    expect(head(arr, size)).toStrictEqual(result);
  });
});
