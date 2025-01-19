const { getMaxTastiness } = require('./A');

describe('1654A. Maximum Cake Tastiness', () => {
  it.each`
    n    | array                                                               | result
    ${1} | ${[5, 2, 1, 4, 7, 3]}                                               | ${12}
    ${2} | ${[32, 78, 78]}                                                     | ${156}
    ${3} | ${[69, 54, 91]}                                                     | ${160}
    ${4} | ${[999021, 999021, 999021, 999021, 999652, 999021, 999021, 999021]} | ${1998673}
    ${5} | ${[1000000000, 1000000000]}                                         | ${2000000000}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxTastiness(array)).toBe(result);
  });
});
