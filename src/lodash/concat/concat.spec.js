const { concat } = require('./concat');

describe('Lodash: concat function', () => {
  it.each`
    n    | vals                    | result
    ${1} | ${[[1]]}                | ${[1]}
    ${2} | ${[[1], 2, [3], [[4]]]} | ${[1, 2, 3, [4]]}
  `('Base test: $n', ({ vals, result }) => {
    expect(concat(...vals)).toStrictEqual(result);
  });
});
