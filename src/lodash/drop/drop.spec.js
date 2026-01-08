/* eslint-disable no-undefined */
const { drop } = require('./drop');

describe('Lodash: drop function', () => {
  it.each`
    n    | arr          | num          | result
    ${1} | ${[1, 2, 3]} | ${undefined} | ${[2, 3]}
    ${2} | ${[1, 2, 3]} | ${2}         | ${[3]}
    ${3} | ${[1, 2, 3]} | ${5}         | ${[]}
    ${5} | ${[1, 2, 3]} | ${0}         | ${[1, 2, 3]}
  `('Base test: $n', ({ arr, num, result }) => {
    expect(drop(arr, num)).toStrictEqual(result);
  });
});
