const { isItPossibleToOrder } = require('./B');

describe('1393B. Applejack and Storages', () => {
  it.each`
    n    | store                 | operations                                    | result
    ${1} | ${[1, 1, 1, 2, 1, 1]} | ${['+ 2', '+ 1', '- 1', '+ 2', '- 1', '+ 2']} | ${['NO', 'YES', 'NO', 'NO', 'NO', 'YES']}
  `('Base test: $n', ({ store, operations, result }) => {
    expect(isItPossibleToOrder(store, operations)).toStrictEqual(result);
  });
});
