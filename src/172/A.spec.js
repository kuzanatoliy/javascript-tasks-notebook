const { getCodePhoneLength } = require('./A');

describe('172A. Phone Code', () => {
  it.each`
    n    | numbers                                                                     | result
    ${1} | ${['00209', '00219', '00999', '00909']}                                     | ${2}
    ${2} | ${['77012345678999999999', '77012345678901234567', '77012345678998765432']} | ${12}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getCodePhoneLength(numbers)).toBe(result);
  });
});
