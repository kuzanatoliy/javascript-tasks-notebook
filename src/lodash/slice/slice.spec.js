/* eslint-disable no-undefined */
const { slice } = require('./slice');

describe('Lodash: slice function', () => {
  it.each`
    n    | arr                | start        | end          | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${1}         | ${4}         | ${[2, 3, 4]}
    ${2} | ${[1, 2, 3, 4, 5]} | ${1}         | ${undefined} | ${[2, 3, 4, 5]}
    ${3} | ${[1, 2, 3, 4, 5]} | ${undefined} | ${undefined} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ arr, start, end, result }) => {
    expect(slice(arr, start, end)).toStrictEqual(result);
  });
});
