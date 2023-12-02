const { isYes } = require('./A');

describe('1703A. YES or YES?', () => {
  it.each`
    n     | string   | result
    ${1}  | ${'YES'} | ${'YES'}
    ${2}  | ${'yES'} | ${'YES'}
    ${3}  | ${'yes'} | ${'YES'}
    ${4}  | ${'Yes'} | ${'YES'}
    ${5}  | ${'YeS'} | ${'YES'}
    ${6}  | ${'Noo'} | ${'NO'}
    ${7}  | ${'orZ'} | ${'NO'}
    ${8}  | ${'yEz'} | ${'NO'}
    ${9}  | ${'Yas'} | ${'NO'}
    ${10} | ${'XES'} | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isYes(string)).toBe(result);
  });
});
