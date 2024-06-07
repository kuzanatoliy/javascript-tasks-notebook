const { getReordedArray } = require('./D');

describe('977C. Less or Equal', () => {
  it.each`
    n    | array                                           | result
    ${1} | ${[4n, 8n, 6n, 3n, 12n, 9n]}                    | ${[9n, 3n, 6n, 12n, 4n, 8n]}
    ${2} | ${[42n, 28n, 84n, 126n]}                        | ${[126n, 42n, 84n, 28n]}
    ${3} | ${[1000000000000000000n, 3000000000000000000n]} | ${[3000000000000000000n, 1000000000000000000n]}
  `('Base test: $n', ({ array, result }) => {
    expect(getReordedArray(array)).toStrictEqual(result);
  });
});
