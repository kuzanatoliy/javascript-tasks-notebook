/* eslint-disable no-undefined */
const { differenceBy } = require('./differenceBy');

describe('Lodash: differenceBy function', () => {
  it.each`
    n    | array                   | values        | iteratee      | result
    ${1} | ${[1, 2, 3]}            | ${[2]}        | ${undefined}  | ${[1, 3]}
    ${2} | ${[{ x: 2 }, { x: 1 }]} | ${[{ x: 1 }]} | ${'x'}        | ${[{ x: 2 }]}
    ${3} | ${[2.1, 1.2]}           | ${[2.3, 3.4]} | ${Math.floor} | ${[1.2]}
  `('Base test: $n', ({ array, values, iteratee, result }) => {
    expect(differenceBy(array, values, iteratee)).toStrictEqual(result);
  });
});
