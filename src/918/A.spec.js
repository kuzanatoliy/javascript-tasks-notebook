const { getName } = require('./A');

describe('918A. Eleven', () => {
  it.each`
    n    | num   | result
    ${1} | ${8}  | ${'OOOoOooO'}
    ${2} | ${15} | ${'OOOoOooOooooOoo'}
  `('Base test: $n', ({ num, result }) => {
    expect(getName(num)).toBe(result);
  });
});
