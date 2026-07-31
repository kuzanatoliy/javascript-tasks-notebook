/* eslint-disable no-undefined */
const { moveNumberToTheEndV1 } = require('./move-number-to-the-end');

describe('moveNumberToTheEndV1', () => {
  it.each`
    n    | arr                   | target       | result
    ${1} | ${[1, 0, 2, 1]}       | ${undefined} | ${[1, 2, 1, 0]}
    ${2} | ${[0, 1, 0, 2, 0, 3]} | ${0}         | ${[1, 2, 3, 0, 0, 0]}
    ${3} | ${[0, 1, 0, 2, 0, 3]} | ${2}         | ${[0, 1, 0, 0, 3, 2]}
  `('Base test: $n', ({ arr, target, result }) => {
    expect(moveNumberToTheEndV1(arr, target)).toStrictEqual(result);
  });
});
