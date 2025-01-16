const { getMaxValue } = require('./A');

describe('1696A. NIT orz!', () => {
  it.each`
    n    | arr                               | z           | result
    ${1} | ${[2, 4]}                         | ${3}        | ${7}
    ${2} | ${[0, 2, 4, 6, 8]}                | ${5}        | ${13}
    ${3} | ${[10]}                           | ${9}        | ${11}
    ${4} | ${[7, 15, 30, 29, 27]}            | ${7}        | ${31}
    ${5} | ${[10293834, 10284344, 13635445]} | ${39548743} | ${48234367}
  `('Base test: $n', ({ arr, z, result }) => {
    expect(getMaxValue(arr, z)).toBe(result);
  });
});
