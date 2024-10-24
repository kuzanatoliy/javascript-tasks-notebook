const { getCountOfOperations } = require('./A');

describe('1972A. Contest Proposal', () => {
  it.each`
    n    | arrA                                    | arrB                                   | result
    ${1} | ${[1000, 1400, 2000, 2000, 2200, 2700]} | ${[800, 1200, 1500, 1800, 2200, 3000]} | ${2}
    ${2} | ${[4, 5, 6, 7, 8, 9]}                   | ${[1, 2, 3, 4, 5, 6]}                  | ${3}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfOperations(arrA, arrB)).toBe(result);
  });
});
