const { isItPossibleToGetDerangement } = require('./A');

describe('2124A. Deranged Deletions', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 2, 3]}       | ${['NO']}
    ${2} | ${[4, 5, 5, 2, 4]} | ${['YES', [5, 2]]}
    ${3} | ${[1]}             | ${['NO']}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToGetDerangement(arr)).toStrictEqual(result);
  });
});
