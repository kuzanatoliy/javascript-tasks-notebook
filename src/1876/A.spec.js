const { getMinCost } = require('./A');

describe('1876A. Helmets in Night Light', () => {
  it.each`
    n    | arrA                  | arrB                  | p         | result
    ${1} | ${[2, 3, 2, 1, 1, 3]} | ${[4, 3, 2, 6, 3, 6]} | ${3}      | ${16}
    ${2} | ${[100000]}           | ${[1]}                | ${100000} | ${100000}
    ${3} | ${[1, 4, 2, 3]}       | ${[103, 96, 86, 57]}  | ${94}     | ${265}
    ${4} | ${[2, 3, 1, 3, 3]}    | ${[3, 2, 2, 2, 1]}    | ${4}      | ${9}
  `('Base test: $n', ({ arrA, arrB, p, result }) => {
    expect(getMinCost(arrA, arrB, p)).toBe(result);
  });
});
