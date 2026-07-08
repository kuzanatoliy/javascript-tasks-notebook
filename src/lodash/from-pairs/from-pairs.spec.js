const { fromPairs } = require('./from-pairs');

describe('Lodash: fromPairs function', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[['a', 1], ['b', 2]]} | ${{ a: 1, b: 2 }}
  `('Base test: $n', ({ arr, result }) => {
    expect(fromPairs(arr)).toStrictEqual(result);
  });
});
