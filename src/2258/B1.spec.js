const { getCount } = require('./B1');

describe('2258B1. Carrot Chopdown (Easy Version)', () => {
  it.each`
    n    | m    | arr                      | result
    ${1} | ${4} | ${[1, 2, 3, 4, 4]}       | ${6}
    ${2} | ${8} | ${[1, 1, 8, 8, 8]}       | ${6}
    ${3} | ${8} | ${[6]}                   | ${2}
    ${4} | ${9} | ${[1, 7, 5, 1, 7, 5, 3]} | ${7}
    ${5} | ${1} | ${[1, 1, 1, 1]}          | ${4}
    ${6} | ${5} | ${[3, 1, 5]}             | ${3}
  `('Base test: $n', ({ m, arr, result }) => {
    expect(getCount(m, arr)).toBe(result);
  });
});
