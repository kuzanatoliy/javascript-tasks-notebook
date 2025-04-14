const { checkPassword } = require('./A');

describe('411A. Password Check', () => {
  it.each`
    n    | password                    | result
    ${1} | ${'Too weak'}               | ${'Too weak'}
    ${2} | ${'Too weak'}               | ${'Too weak'}
    ${3} | ${'CONTEST_is_STARTED!!11'} | ${'Correct'}
  `('Base test: $n', ({ password, result }) => {
    expect(checkPassword(password)).toBe(result);
  });
});
