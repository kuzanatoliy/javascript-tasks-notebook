const { getCountOfUnreadedChapters } = require('./A');

describe('1136A. Nastya Is Reading a Book', () => {
  it.each`
    n    | array                         | k    | result
    ${1} | ${[[1, 3], [4, 7], [8, 11]]}  | ${2} | ${3}
    ${2} | ${[[1, 4], [5, 9], [10, 12]]} | ${9} | ${2}
    ${3} | ${[[1, 7]]}                   | ${4} | ${1}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getCountOfUnreadedChapters(array, k)).toBe(result);
  });
});
