const { getCountOfOperations } = require('./B');

describe('1696B. NIT Destroys the Universe', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[0, 0, 0, 0]}          | ${0}
    ${2} | ${[0, 1, 2, 3, 4]}       | ${1}
    ${3} | ${[0, 2, 3, 0, 1, 2, 0]} | ${2}
    ${4} | ${[1000000000]}          | ${1}
  `('Base test: $n', ({ arr, z, result }) => {
    expect(getCountOfOperations(arr, z)).toBe(result);
  });
});
