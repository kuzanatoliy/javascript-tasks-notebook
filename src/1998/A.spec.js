const { getPositions } = require('./A');

describe('1998A. Find K Distinct Points with Fixed Center', () => {
  it.each`
    n    | x     | y     | k    | result
    ${1} | ${10} | ${10} | ${1} | ${[[10, 10]]}
    ${2} | ${0}  | ${0}  | ${3} | ${[[0, 0], [-1, -1], [1, 1]]}
    ${3} | ${-5} | ${-8} | ${8} | ${[[-6, -9], [-4, -7], [-7, -10], [-3, -6], [-8, -11], [-2, -5], [-9, -12], [-1, -4]]}
    ${4} | ${4}  | ${-5} | ${3} | ${[[4, -5], [3, -6], [5, -4]]}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getPositions(x, y, k)).toStrictEqual(result);
  });
});
