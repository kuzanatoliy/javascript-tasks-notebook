const { isItPossibleToTransform } = require('./C');

describe('1807C. Find and Replace', () => {
  it.each`
    n    | string          | result
    ${1} | ${'abacaba'}    | ${'YES'}
    ${2} | ${'aa'}         | ${'NO'}
    ${3} | ${'y'}          | ${'YES'}
    ${4} | ${'bkpt'}       | ${'YES'}
    ${5} | ${'ninfia'}     | ${'NO'}
    ${6} | ${'banana'}     | ${'YES'}
    ${7} | ${'codeforces'} | ${'NO'}
    ${8} | ${'testcase'}   | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToTransform(string)).toBe(result);
  });
});
