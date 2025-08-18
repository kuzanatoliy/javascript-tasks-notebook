const { getMinDelay } = require('./A');

describe('408A. Line to Cashier', () => {
  it.each`
    n    | queues                                      | result
    ${1} | ${[[1]]}                                    | ${20}
    ${2} | ${[[100], [1, 2, 2, 3], [1, 9, 1], [7, 8]]} | ${100}
  `('Base test: $n', ({ queues, result }) => {
    expect(getMinDelay(queues)).toBe(result);
  });
});
