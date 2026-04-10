const { getRedTotalArea } = require('./B');

describe('157B. Trace', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1]}       | ${3.141592653589793}
    ${2} | ${[1, 4, 2]} | ${40.840704496667314}
  `('Base test: $n', ({ arr, result }) => {
    expect(getRedTotalArea(arr)).toBe(result);
  });
});
