const { isTemplateExist } = require('./A');

describe('1922A. Tricky Template', () => {
  it.each`
    n    | str1            | str2            | str3            | result
    ${1} | ${'a'}          | ${'b'}          | ${'c'}          | ${'YES'}
    ${2} | ${'aa'}         | ${'bb'}         | ${'aa'}         | ${'NO'}
    ${3} | ${'mathforces'} | ${'luckforces'} | ${'adhoccoder'} | ${'YES'}
    ${4} | ${'acc'}        | ${'abd'}        | ${'abc'}        | ${'NO'}
  `('Base test: $n', ({ str1, str2, str3, result }) => {
    expect(isTemplateExist(str1, str2, str3)).toBe(result);
  });
});
