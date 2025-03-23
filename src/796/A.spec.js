const { getDistance } = require('./A');

describe('796A. Buying A House', () => {
  it.each`
    n    | array                             | m    | val    | result
    ${1} | ${[0, 27, 32, 21, 19]}            | ${1} | ${20}  | ${40}
    ${2} | ${[62, 0, 0, 0, 99, 33, 22]}      | ${3} | ${50}  | ${30}
    ${3} | ${[1, 0, 1, 0, 0, 0, 0, 0, 1, 1]} | ${5} | ${100} | ${20}
  `('Base test: $n', ({ array, m, val, result }) => {
    expect(getDistance(array, m, val)).toBe(result);
  });
});
