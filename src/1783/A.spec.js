const { isItPossibleToReorder } = require('./A');

describe('1783A. Make it Beautiful', () => {
  it.each`
    n    | array              | result
    ${1} | ${[3, 3, 6, 6]}    | ${['YES', [6, 3, 3, 6]]}
    ${2} | ${[10, 10]}        | ${['NO']}
    ${3} | ${[1, 2, 3, 4, 5]} | ${['YES', [5, 1, 2, 3, 4]]}
    ${4} | ${[1, 4, 4]}       | ${['YES', [4, 1, 4]]}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToReorder(array)).toStrictEqual(result);
  });
});
