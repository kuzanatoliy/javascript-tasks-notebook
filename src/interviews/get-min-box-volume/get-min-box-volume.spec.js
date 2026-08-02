/* eslint-disable no-undefined */
const { getBoxesVolume } = require('./get-min-box-volume');

describe('  getBoxesVolume', () => {
  it.each`
    n    | arr                                 | count | result
    ${1} | ${[1, 3, 2, 4, 10, 8, 4, 2, 5, 3]}  | ${4}  | ${12}
    ${2} | ${[1, 3, 2, 4, 10, 8, 4, 2, 14, 3]} | ${4}  | ${17}
  `('Base test: $n', ({ arr, count, result }) => {
    expect(getBoxesVolume(arr, count)).toBe(result);
  });
});
