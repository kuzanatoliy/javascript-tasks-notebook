const { getNewPassword } = require('./A');

describe('1997A. Strong Password', () => {
  it.each`
    n    | str           | result
    ${1} | ${'a'}        | ${'ba'}
    ${2} | ${'aaa'}      | ${'abaa'}
    ${3} | ${'abb'}      | ${'abab'}
    ${4} | ${'password'} | ${'pasasword'}
  `('Base test: $n', ({ str, result }) => {
    expect(getNewPassword(str)).toBe(result);
  });
});
