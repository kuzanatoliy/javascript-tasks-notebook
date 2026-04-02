const { isPetriciumusCifera } = require('./A');

describe('114A. Cifera', () => {
  it.each`
    n    | k    | l     | result
    ${1} | ${5} | ${25} | ${['YES', 1]}
    ${2} | ${3} | ${8}  | ${['NO']}
  `('Base test: $n', ({ k, l, result }) => {
    expect(isPetriciumusCifera(k, l)).toStrictEqual(result);
  });
});
