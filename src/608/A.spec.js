const { getTime } = require('./A');

describe('608A. Saitama Destroys Hotel', () => {
  it.each`
    n    | s       | pas                                               | result
    ${1} | ${7}    | ${[[2, 1], [3, 8], [5, 2]]}                       | ${11}
    ${2} | ${6}    | ${[[2, 77], [3, 33], [8, 21], [9, 12], [10, 64]]} | ${79}
    ${3} | ${1000} | ${[[1, 1]]}                                       | ${1000}
  `('Base test: $n', ({ s, pas, result }) => {
    expect(getTime(s, pas)).toBe(result);
  });
});
