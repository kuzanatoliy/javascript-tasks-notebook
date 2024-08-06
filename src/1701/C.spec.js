const { getMinTime } = require('./C');

describe('1701C. Schedule Management', () => {
  it.each`
    n    | array              | k    | result
    ${1} | ${[1, 2, 1, 2]}    | ${2} | ${2}
    ${2} | ${[1, 1, 1, 1]}    | ${2} | ${3}
    ${2} | ${[5, 1, 3, 2, 4]} | ${5} | ${1}
    ${2} | ${[1]}             | ${1} | ${1}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getMinTime(array, k)).toBe(result);
  });
});
