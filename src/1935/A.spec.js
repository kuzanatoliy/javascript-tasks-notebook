const { getExicographicallySmallestString } = require('./A');

describe('1935A. Entertainment in MAC', () => {
  it.each`
    n    | str                      | result
    ${1} | ${'cpm'}                 | ${'cpm'}
    ${2} | ${'grib'}                | ${'birggrib'}
    ${3} | ${'kupitimilablodarbuz'} | ${'kupitimilablodarbuz'}
    ${4} | ${'capybara'}            | ${'arabypaccapybara'}
    ${5} | ${'abacaba'}             | ${'abacaba'}
  `('Base test: $n', ({ str, result }) => {
    expect(getExicographicallySmallestString(str)).toBe(result);
  });
});
