const { isMeowing } = require('./A');

describe('1800A. Is It a Cat?', () => {
  it.each`
    n    | string              | result
    ${1} | ${'meOw'}           | ${'YES'}
    ${2} | ${'mMmeoOoWWWwwwW'} | ${'YES'}
    ${3} | ${'mew'}            | ${'NO'}
    ${4} | ${'MmeEeUw'}        | ${'NO'}
    ${5} | ${'MEOW'}           | ${'YES'}
    ${6} | ${'MmyaVW'}         | ${'NO'}
    ${7} | ${'meowA'}          | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isMeowing(string)).toBe(result);
  });
});
