/* eslint-disable no-undefined */
const { intersection } = require('./intersection');

describe('Lodash: intersection function', () => {
  it.each`
    n    | arrs                | result
    ${1} | ${[[2, 1], [2, 3]]} | ${[2]}
  `('Base test: $n', ({ arrs, result }) => {
    expect(intersection(...arrs)).toStrictEqual(result);
  });
});
