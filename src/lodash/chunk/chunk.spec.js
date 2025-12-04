/* eslint-disable no-undefined */
const { chunk } = require('./chunk');

describe('Lodash: chunk function', () => {
  it.each`
    n    | arr                | size         | result
    ${1} | ${[1, 2, 3]}       | ${undefined} | ${[[1], [2], [3]]}
    ${2} | ${[1, 2, 3, 4, 5]} | ${2}         | ${[[1, 2], [3, 4], [5]]}
    ${3} | ${[1, 2, 3, 4, 5]} | ${3}         | ${[[1, 2, 3], [4, 5]]}
  `('Base test: $n', ({ arr, size, result }) => {
    expect(chunk(arr, size)).toStrictEqual(result);
  });
});
