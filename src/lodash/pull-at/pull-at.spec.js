const { pullAt } = require('./pull-at');

describe('Lodash: pullAt function', () => {
  it.each`
    n    | arr                     | indexes   | result1       | result2
    ${1} | ${['a', 'b', 'c', 'd']} | ${[1, 3]} | ${['a', 'c']} | ${['b', 'd']}
  `('Base test: $n', ({ arr, indexes, result1, result2 }) => {
    expect(pullAt(arr, indexes)).toStrictEqual(result2);
    expect(arr).toStrictEqual(result1);
  });
});
