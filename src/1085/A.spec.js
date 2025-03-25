const { decriptString } = require('./A');

describe('1085A. Right-Left Cipher', () => {
  it.each`
    n    | str             | result
    ${1} | ${'ncteho'}     | ${'techno'}
    ${2} | ${'erfdcoeocs'} | ${'codeforces'}
    ${3} | ${'z'}          | ${'z'}
  `('Base test: $n', ({ str, result }) => {
    expect(decriptString(str)).toBe(result);
  });
});
