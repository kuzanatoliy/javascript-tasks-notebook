const { getOperationsCounts } = require('./B');

describe('227B. Effective Approach', () => {
  it.each`
    n    | arr          | queries      | result
    ${1} | ${[1, 2]}    | ${[1]}       | ${[1, 2]}
    ${2} | ${[2, 1]}    | ${[1]}       | ${[2, 1]}
    ${3} | ${[3, 1, 2]} | ${[1, 2, 3]} | ${[6, 6]}
  `('Base test: $n', ({ arr, queries, result }) => {
    expect(getOperationsCounts(arr, queries)).toStrictEqual(result);
  });
});
