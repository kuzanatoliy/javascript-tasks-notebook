const { getHeight } = require('./E');

describe('1873E. Building an Aquarium', () => {
  it.each`
    n    | x             | arr                      | result
    ${1} | ${9}          | ${[3, 1, 2, 4, 6, 2, 5]} | ${4}
    ${2} | ${10}         | ${[1, 1, 1]}             | ${4}
    ${3} | ${1}          | ${[1, 4, 3, 4]}          | ${2}
    ${4} | ${1984}       | ${[2, 6, 5, 9, 1, 8]}    | ${335}
    ${5} | ${1000000000} | ${[1]}                   | ${1000000001}
  `('Base test: $n', ({ x, arr, result }) => {
    expect(getHeight(x, arr)).toBe(result);
  });
});
