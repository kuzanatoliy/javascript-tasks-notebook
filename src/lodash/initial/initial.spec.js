/* eslint-disable no-undefined */
const { initial } = require('./initial');

describe('Lodash: initial function', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${[1, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(initial(arr)).toStrictEqual(result);
  });
});
