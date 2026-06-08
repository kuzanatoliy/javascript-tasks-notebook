const { isWondefulContest } = require('./A');

describe('2222A. A Wonderful Contest', () => {
  it.each`
    n    | arr                                       | result
    ${1} | ${[100, 20]}                              | ${'YES'}
    ${2} | ${[10, 10]}                               | ${'NO'}
    ${3} | ${[50, 100, 25]}                          | ${'YES'}
    ${4} | ${[1, 2, 5, 20]}                          | ${'NO'}
    ${5} | ${[100, 1, 2, 4, 5, 10, 20, 25, 50, 100]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isWondefulContest(arr)).toBe(result);
  });
});
