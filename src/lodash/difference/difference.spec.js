const { difference } = require('./difference');

describe('Lodash: difference function', () => {
  it.each`
    n    | arr       | vals      | result
    ${1} | ${[2, 1]} | ${[2, 3]} | ${[1]}
  `('Base test: $n', ({ arr, vals, result }) => {
    expect(difference(arr, vals)).toStrictEqual(result);
  });
});
