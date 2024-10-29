const { getCountOfCrashes } = require('./A');

describe('1453A. Cancel the Trains', () => {
  it.each`
    n    | rows                                  | columns                                                    | result
    ${1} | ${[1]}                                | ${[3, 4]}                                                  | ${0}
    ${2} | ${[1, 3, 4]}                          | ${[2, 4]}                                                  | ${1}
    ${3} | ${[2, 7, 16, 28, 33, 57, 59, 86, 99]} | ${[3, 9, 14, 19, 25, 26, 28, 35, 41, 59, 85, 87, 99, 100]} | ${3}
  `('Base test: $n', ({ rows, columns, result }) => {
    expect(getCountOfCrashes(rows, columns)).toBe(result);
  });
});
