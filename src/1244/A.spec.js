const { getCounts } = require('./A');

describe('1244A. Pens and Pencils', () => {
  it.each`
    n    | a     | b     | c     | d     | k    | result
    ${1} | ${7}  | ${5}  | ${4}  | ${5}  | ${8} | ${[2, 6]}
    ${2} | ${7}  | ${5}  | ${4}  | ${5}  | ${2} | ${[-1]}
    ${3} | ${20} | ${53} | ${45} | ${26} | ${4} | ${[1, 3]}
  `('Base test: $n', ({ a, b, c, d, k, result }) => {
    expect(getCounts(a, b, c, d, k)).toStrictEqual(result);
  });
});
