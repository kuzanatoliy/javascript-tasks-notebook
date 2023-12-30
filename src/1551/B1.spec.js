const { getCountOfRedItems } = require('./B1');

describe('1551A. Polycarp and str', () => {
  it.each`
    n    | str             | result
    ${1} | ${'kzaaa'}      | ${2}
    ${2} | ${'codeforces'} | ${5}
    ${3} | ${'archive'}    | ${3}
    ${4} | ${'y'}          | ${0}
    ${5} | ${'xxxxxx'}     | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfRedItems(str)).toStrictEqual(result);
  });
});
