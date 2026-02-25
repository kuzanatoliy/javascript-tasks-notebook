const { isHash } = require('./A');

describe('1278A. Shuffle Hashing', () => {
  it.each`
    n    | str              | pass               | result
    ${1} | ${'abacaba'}     | ${'zyxaabcaabkjh'} | ${'YES'}
    ${2} | ${'onetwothree'} | ${'threetwoone'}   | ${'YES'}
    ${3} | ${'one'}         | ${'zzonneyy'}      | ${'NO'}
    ${4} | ${'one'}         | ${'none'}          | ${'YES'}
    ${5} | ${'twenty'}      | ${'ten'}           | ${'NO'}
  `('Base test: $n', ({ str, pass, result }) => {
    expect(isHash(str, pass)).toBe(result);
  });
});
