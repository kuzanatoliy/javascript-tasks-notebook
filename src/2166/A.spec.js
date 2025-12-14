const { getCountOfOperations } = require('./A');

describe('2166A. Same Difference', () => {
  it.each`
    n    | arr         | result
    ${1} | ${'qwq'}    | ${1}
    ${2} | ${'aa'}     | ${0}
    ${3} | ${'test'}   | ${2}
    ${4} | ${'abbac'}  | ${4}
    ${5} | ${'abcabc'} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
