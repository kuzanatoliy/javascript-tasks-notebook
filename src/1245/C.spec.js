const { getCountOfStrings } = require('./C');

describe("1245C. Constanze's Machine", () => {
  it.each`
    n    | string          | result
    ${1} | ${'ouuokarinn'} | ${4}
    ${2} | ${'banana'}     | ${1}
    ${3} | ${'nnn'}        | ${3}
    ${4} | ${'amanda'}     | ${0}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfStrings(string)).toBe(result);
  });
});
