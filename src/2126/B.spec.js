const { getCountOfHikes } = require('./B');

describe('2126A. Only One Digit', () => {
  it.each`
    n    | arr                      | k    | result
    ${1} | ${[0, 1, 0, 0, 0]}       | ${1} | ${3}
    ${2} | ${[0, 0, 0, 0, 0, 0, 0]} | ${3} | ${2}
    ${3} | ${[1, 1, 1]}             | ${1} | ${0}
    ${4} | ${[0, 1, 0, 1]}          | ${2} | ${0}
    ${5} | ${[0, 0, 1, 0, 0, 0]}    | ${2} | ${2}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfHikes(arr, k)).toBe(result);
  });
});
