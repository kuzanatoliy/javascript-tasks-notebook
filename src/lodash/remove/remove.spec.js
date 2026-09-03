const { remove } = require('./remove');

describe('Lodash: remove function', () => {
  it.each`
    n    | arr             | predicate                   | result1   | result2
    ${1} | ${[1, 2, 3, 4]} | ${(item) => item % 2 === 0} | ${[1, 3]} | ${[2, 4]}
  `('Base test: $n', ({ arr, predicate, result1, result2 }) => {
    expect(remove(arr, predicate)).toStrictEqual(result2);
    expect(arr).toStrictEqual(result1);
  });
});
