const { getMaxDemage } = require('./A');

describe('1738A. Glory Addicts', () => {
  it.each`
    n    | arrA                  | arrB                                    | result
    ${1} | ${[0, 1, 1, 1]}       | ${[1, 10, 100, 1000]}                   | ${2112}
    ${2} | ${[0, 0, 0, 1, 1, 1]} | ${[3, 4, 5, 6, 7, 8]}                   | ${63}
    ${3} | ${[1, 1, 1]}          | ${[1000000000, 1000000000, 1000000000]} | ${3000000000}
    ${3} | ${[1]}                | ${[1]}                                  | ${1}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxDemage(arrA, arrB)).toBe(result);
  });
});
