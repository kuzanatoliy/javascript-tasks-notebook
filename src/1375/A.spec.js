const { getNewArray } = require('./A');

describe('1375A. Sign Flipping', () => {
  it.each`
    n    | array                               | result
    ${1} | ${[-2, 4, 3]}                       | ${[2, -4, 3]}
    ${2} | ${[1, 1, 1, 1, 1]}                  | ${[1, -1, 1, -1, 1]}
    ${3} | ${[-2, 4, 7, -6, 4]}                | ${[2, -4, 7, -6, 4]}
    ${4} | ${[9, 7, -4, -2, 1, -3, 9, -4, -5]} | ${[9, -7, 4, -2, 1, -3, 9, -4, 5]}
    ${5} | ${[-4, 1, 9, 4, 8, 9, 5, 1, -9]}    | ${[4, -1, 9, -4, 8, -9, 5, -1, 9]}
  `('Base test: $n', ({ array, result }) => {
    expect(getNewArray(array)).toStrictEqual(result);
  });
});
