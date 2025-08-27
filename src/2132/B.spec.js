const { getSuitableX } = require('./B');

describe('2132B. The Secret Number', () => {
  it.each`
    n    | num                     | result
    ${1} | ${1111n}                | ${[101n, 11n]}
    ${2} | ${12n}                  | ${[]}
    ${3} | ${55n}                  | ${[5n]}
    ${4} | ${999999999999999999n}  | ${[90909090909090909n, 999000999000999n, 999999999n]}
    ${5} | ${1000000000000000000n} | ${[]}
  `('Base test: $n', ({ num, result }) => {
    expect(getSuitableX(num)).toStrictEqual(result);
  });
});
