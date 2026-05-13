const { isUnimodal } = require('./A');

describe('777A. Unimodal Array', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 5, 5, 5, 4, 2]}    | ${'YES'}
    ${2} | ${[10, 20, 30, 20, 10]}  | ${'YES'}
    ${3} | ${[1, 2, 1, 2]}          | ${'NO'}
    ${4} | ${[3, 3, 3, 3, 3, 3, 3]} | ${'YES'}
    ${5} | ${[5, 5, 6, 6, 1]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isUnimodal(arr)).toBe(result);
  });
});
