const { getIndexes } = require('./A');

describe('1398A. Bad Triangle', () => {
  it.each`
    n    | numbers                       | result
    ${1} | ${[4, 6, 11, 11, 15, 18, 20]} | ${[1, 2, 7]}
    ${2} | ${[10, 10, 10, 11]}           | ${-1}
    ${3} | ${[1, 1, 1000000000]}         | ${[1, 2, 3]}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getIndexes(numbers)).toStrictEqual(result);
  });
});
