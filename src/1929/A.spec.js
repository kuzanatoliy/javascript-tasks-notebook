const { getDif } = require('./A');

describe('1929A. Sasha and the Beautiful Array', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[2, 1, 3]}             | ${2}
    ${2} | ${[69, 69, 69]}          | ${0}
    ${3} | ${[100, 54, 80, 43, 90]} | ${57}
    ${4} | ${[3, 4, 3, 3]}          | ${1}
    ${5} | ${[2, 1]}                | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getDif(array)).toBe(result);
  });
});
