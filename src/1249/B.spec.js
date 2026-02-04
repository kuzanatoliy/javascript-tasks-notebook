const { getCountOfDays } = require('./B');

describe('1249A. Yet Another Dividing into Teams', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 2, 3, 4, 5]}    | ${[1, 1, 1, 1, 1]}
    ${2} | ${[2, 3, 1]}          | ${[3, 3, 3]}
    ${3} | ${[4, 6, 2, 1, 5, 3]} | ${[2, 3, 3, 2, 1, 3]}
    ${4} | ${[1]}                | ${[1]}
    ${5} | ${[3, 4, 1, 2]}       | ${[2, 2, 2, 2]}
    ${6} | ${[5, 1, 2, 4, 3]}    | ${[4, 4, 4, 1, 4]}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfDays(array)).toStrictEqual(result);
  });
});
