const { isItPossibleToTakeABus } = require('./J');

describe('2038J. Waiting for...', () => {
  it.each`
    n    | queries                                                                                                  | result
    ${1} | ${[['P', 2], ['P', 5], ['B', 8], ['P', 14], ['B', 5], ['B', 9], ['B', 3], ['P', 2], ['B', 1], ['B', 2]]} | ${['YES', 'NO', 'NO', 'YES', 'NO', 'YES']}
  `('Base test: $n', ({ queries, result }) => {
    expect(isItPossibleToTakeABus(queries)).toStrictEqual(result);
  });
});
