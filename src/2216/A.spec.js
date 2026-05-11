const { getMap } = require('./A');

describe('2216A. Course Wishes', () => {
  it.each`
    n    | arrK         | arr                | result
    ${1} | ${[2, 2]}    | ${[1, 2, 2]}       | ${[2, 3, 1, 1]}
    ${2} | ${[2, 2]}    | ${[3, 3, 3]}       | ${[]}
    ${3} | ${[1]}       | ${[1]}             | ${[1]}
    ${4} | ${[1, 2, 3]} | ${[1, 2, 4, 2, 3]} | ${[5, 2, 2, 4, 4, 1, 1, 1]}
  `('Base test: $n', ({ arrK, arr, result }) => {
    expect(getMap(arrK, arr)).toStrictEqual(result);
  });
});
