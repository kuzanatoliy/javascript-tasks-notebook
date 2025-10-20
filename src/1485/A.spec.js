const { getCountOfOperations } = require('./A');

describe('1485A. Add and Divide', () => {
  it.each`
    n    | a            | b       | result
    ${1} | ${9}         | ${2}    | ${4}
    ${2} | ${1337}      | ${1}    | ${9}
    ${3} | ${1}         | ${1}    | ${2}
    ${4} | ${50000000}  | ${4}    | ${12}
    ${5} | ${991026972} | ${997}  | ${3}
    ${6} | ${1234}      | ${5678} | ${1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfOperations(a, b)).toBe(result);
  });
});
