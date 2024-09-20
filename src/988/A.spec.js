const { isItPossibleToCreateForm } = require('./A');

describe('988A. Diverse Team', () => {
  it.each`
    n    | arr                     | k    | result
    ${1} | ${[15, 13, 15, 15, 12]} | ${3} | ${['YES', [5, 2, 4]]}
    ${2} | ${[15, 13, 15, 15, 12]} | ${4} | ${['NO']}
    ${3} | ${[20, 10, 40, 30]}     | ${4} | ${['YES', [2, 1, 4, 3]]}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(isItPossibleToCreateForm(arr, k)).toStrictEqual(result);
  });
});
