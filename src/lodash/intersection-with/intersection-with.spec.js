/* eslint-disable no-undefined */
const { intersectionWith } = require('./intersection-with');

describe('Lodash: intersection function', () => {
  it.each`
    n    | arr                                 | others                              | comporator                                                | result
    ${1} | ${[{ x: 1, y: 2 }, { x: 2, y: 1 }]} | ${[{ x: 1, y: 1 }, { x: 1, y: 2 }]} | ${(val1, val2) => val1.x === val2.x && val1.y === val2.y} | ${[{ x: 1, y: 2 }]}
  `('Base test: $n', ({ arr, others, comporator, result }) => {
    expect(intersectionWith(arr, others, comporator)).toStrictEqual(result);
  });
});
