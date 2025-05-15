const { getCountOfOperations } = require('./B');

describe('1005B. Delete from the Left', () => {
  it.each`
    n    | str1            | str2      | result
    ${1} | ${'test'}       | ${'west'} | ${2}
    ${2} | ${'codeforces'} | ${'yes'}  | ${9}
    ${3} | ${'test'}       | ${'yes'}  | ${7}
    ${4} | ${'b'}          | ${'ab'}   | ${1}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getCountOfOperations(str1, str2)).toBe(result);
  });
});
