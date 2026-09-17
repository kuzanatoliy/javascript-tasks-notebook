const { getMap } = require('./B');

describe('2128B. Deque Process', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[1, 2, 3, 4, 5, 6, 7]}                   | ${'RLRLRLR'}
    ${2} | ${[1, 3, 6, 8, 9, 7, 5, 4, 2]}             | ${'RLRLLRLRR'}
    ${3} | ${[1, 2, 11, 3, 6, 4, 7, 8, 12, 5, 10, 9]} | ${'RLRLLLLLLRRL'}
    ${4} | ${[4, 1, 2, 5, 6, 3]}                      | ${'LLRLRL'}
    ${5} | ${[1, 2, 3, 5, 4]}                         | ${'RLRLR'}
    ${6} | ${[5, 1, 8, 6, 2, 7, 9, 4, 3]}             | ${'LLLRLLLRR'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMap(arr)).toBe(result);
  });
});
