/* eslint-disable no-undefined */
const { dropRight } = require('./dropRight');

describe('Lodash: dropRight function', () => {
  it.each`
    n    | arr          | num          | result
    ${1} | ${[1, 2, 3]} | ${undefined} | ${[1, 2]}
    ${2} | ${[1, 2, 3]} | ${2}         | ${[1]}
    ${3} | ${[1, 2, 3]} | ${5}         | ${[]}
    ${5} | ${[1, 2, 3]} | ${0}         | ${[1, 2, 3]}
  `('Base test: $n', ({ arr, num, result }) => {
    expect(dropRight(arr, num)).toStrictEqual(result);
  });
});
