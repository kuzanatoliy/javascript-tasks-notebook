const { getCountOfTasks } = require('./A');

describe('1980A. My First Sorting Proroundslem', () => {
  it.each`
    n    | tasks           | rounds | result
    ${1} | ${'BGECDCBDED'} | ${1}   | ${2}
    ${2} | ${'BGECDCBDED'} | ${2}   | ${5}
    ${3} | ${'BBCDEFFGG'}  | ${1}   | ${1}
  `('Btasksse test: $n', ({ tasks, rounds, result }) => {
    expect(getCountOfTasks(tasks, rounds)).toBe(result);
  });
});
