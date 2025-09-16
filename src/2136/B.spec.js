const { getPermutation } = require('./B');

describe('2137B. Like the Bitset', () => {
  it.each`
    n    | map             | k    | result
    ${1} | ${'00'}         | ${1} | ${['YES', [2, 1]]}
    ${2} | ${'0010'}       | ${3} | ${['YES', [4, 3, 1, 2]]}
    ${3} | ${'11011'}      | ${2} | ${['NO']}
    ${4} | ${'1111110'}    | ${5} | ${['NO']}
    ${5} | ${'00101011'}   | ${4} | ${['YES', [8, 7, 1, 6, 2, 5, 3, 4]]}
    ${6} | ${'1000000010'} | ${2} | ${['YES', [1, 10, 9, 8, 7, 6, 5, 4, 2, 3]]}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getPermutation(map, k)).toStrictEqual(result);
  });
});
