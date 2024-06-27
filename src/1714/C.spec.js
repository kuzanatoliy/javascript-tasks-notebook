const { getNumber } = require('./C');

describe('1714C. Minimum Varied Number', () => {
  it.each`
    n    | number | result
    ${1} | ${20}  | ${389}
    ${2} | ${8}   | ${8}
    ${3} | ${45}  | ${123456789}
    ${4} | ${10}  | ${19}
  `('Base test: $n', ({ number, result }) => {
    expect(getNumber(number)).toBe(result);
  });
});
