/* eslint-disable no-undefined */
const { intersectionBy } = require('./intersection-by');

describe('Lodash: intersection function', () => {
  it.each`
    n    | arrs                                  | fn            | result
    ${1} | ${[[2.1, 1.2], [2.3, 3.4]]}           | ${Math.floor} | ${[2.1]}
    ${1} | ${[[{ x: 1 }], [{ x: 2 }, { x: 1 }]]} | ${'x'}        | ${[{ x: 1 }]}
  `('Base test: $n', ({ arrs, fn, result }) => {
    expect(intersectionBy(...arrs, fn)).toStrictEqual(result);
  });
});
