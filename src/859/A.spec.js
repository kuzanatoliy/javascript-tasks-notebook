const { getCountOfSkipedPeople } = require('./A');

describe('859A. Declined Finalists', () => {
  it.each`
    n    | arr                                                                                             | result
    ${1} | ${[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28]} | ${3}
    ${2} | ${[16, 23, 8, 15, 4]}                                                                           | ${0}
    ${3} | ${[14, 15, 92]}                                                                                 | ${67}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSkipedPeople(arr)).toBe(result);
  });
});
