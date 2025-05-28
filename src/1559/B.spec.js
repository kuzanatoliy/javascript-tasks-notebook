const { paint } = require('./B');

describe('1559B. Mocha and Red and Blue', () => {
  it.each`
    n    | origin          | result
    ${1} | ${'?R???BR'}    | ${'BRRBRBR'}
    ${2} | ${'???R???'}    | ${'BRBRBRB'}
    ${3} | ${'?'}          | ${'B'}
    ${4} | ${'B'}          | ${'B'}
    ${5} | ${'?R??RB??B?'} | ${'BRRBRBBRBR'}
  `('Base test: $n', ({ origin, result }) => {
    expect(paint(origin)).toBe(result);
  });
});
