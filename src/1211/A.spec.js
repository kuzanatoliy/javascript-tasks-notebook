const { getContest } = require('./A');

describe('1211A. Three Problems', () => {
  it.each`
    n    | array                                  | result
    ${1} | ${[3, 1, 4, 1, 5, 9]}                  | ${[2, 1, 3]}
    ${2} | ${[1, 1000000000, 1, 1000000000, 1]}   | ${[-1, -1, -1]}
    ${3} | ${[10, 10, 11, 10, 10, 10, 10, 10, 1]} | ${[9, 1, 3]}
  `('Base test: $n', ({ array, result }) => {
    expect(getContest(array)).toStrictEqual(result);
  });
});
