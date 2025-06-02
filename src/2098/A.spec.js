const { transformPhone } = require('./A');

describe("2098A. Vadim's Collection", () => {
  it.each`
    n    | phone           | result
    ${1} | ${'9999999999'} | ${'9999999999'}
    ${2} | ${'9988776655'} | ${'9876556789'}
    ${3} | ${'9988776650'} | ${'9876567890'}
    ${4} | ${'9899999999'} | ${'9899999999'}
  `('Base test: $n', ({ phone, result }) => {
    expect(transformPhone(phone)).toBe(result);
  });
});
