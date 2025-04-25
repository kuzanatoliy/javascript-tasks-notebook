const { restoreString } = require('./B');

describe('1927B. Following the String', () => {
  it.each`
    n    | arr                                  | result
    ${1} | ${[0, 0, 0, 1, 0, 2, 0, 3, 1, 1, 4]} | ${'zyxxwxvxvwx'}
    ${2} | ${[0, 0, 0, 0, 0, 1, 0, 1, 1, 0]}    | ${'zyxwvvuuwt'}
    ${3} | ${[0]}                               | ${'z'}
    ${4} | ${[0, 1, 2, 3, 4, 5, 6, 7]}          | ${'zzzzzzzz'}
    ${5} | ${[0, 0, 0, 0, 0, 0, 0, 0]}          | ${'zyxwvuts'}
  `('Base test: $n', ({ arr, result }) => {
    expect(restoreString(arr)).toBe(result);
  });
});
