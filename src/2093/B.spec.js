const { getCountOfOperations } = require('./B');

describe('2093B. Expensive Number', () => {
  it.each`
    n    | snum        | result
    ${1} | ${'666'}    | ${2}
    ${2} | ${'13700'}  | ${4}
    ${3} | ${'102030'} | ${3}
    ${4} | ${'7'}      | ${0}
  `('Base test: $n', ({ snum, result }) => {
    expect(getCountOfOperations(snum)).toBe(result);
  });
});
