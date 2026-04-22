const { isGoodPlay } = require('./A');

describe('864A. Fair Game', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[11, 27, 27, 11]}         | ${['YES', [11, 27]]}
    ${2} | ${[6, 6]}                   | ${['NO']}
    ${3} | ${[10, 20, 30, 20, 10, 20]} | ${['NO']}
    ${4} | ${[1, 1, 2, 2, 3, 3]}       | ${['NO']}
  `('Base test: $n', ({ arr, result }) => {
    expect(isGoodPlay(arr)).toStrictEqual(result);
  });
});
