const { getWay } = require('./C');

describe('1430C. Numbers on Whiteboard', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[[4, 3], [4, 2], [3, 1]]}
  `('Base test: $n', ({ num, result }) => {
    expect(getWay(num)).toStrictEqual(result);
  });
});
