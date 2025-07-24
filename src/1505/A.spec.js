const { getResult } = require('./A');

describe('1505A. Is it rated - 2', () => {
  it.each`
    n    | str        | result
    ${1} | ${'cbabc'} | ${'NO'}
    ${2} | ${'ab'}    | ${'NO'}
    ${3} | ${'zza'}   | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(getResult(str)).toStrictEqual(result);
  });
});
