const { compact } = require('./compact');

describe('Lodash: compact function', () => {
  it.each`
    n    | arr                        | result
    ${1} | ${[0, 1, false, 2, '', 3]} | ${[1, 2, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(compact(arr)).toStrictEqual(result);
  });
});
