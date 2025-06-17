const { getMaxSum } = require('./A');

describe('1609A. Divide and Multiply', () => {
  it.each`
    n    | arr                                                             | result
    ${1} | ${[6n, 4n, 2n]}                                                 | ${50n}
    ${2} | ${[1n, 2n, 3n, 4n, 5n]}                                         | ${46n}
    ${3} | ${[10n]}                                                        | ${10n}
    ${3} | ${[2n, 3n, 4n]}                                                 | ${26n}
    ${3} | ${[8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n, 8n]} | ${35184372088846n}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSum(arr)).toStrictEqual(result);
  });
});
