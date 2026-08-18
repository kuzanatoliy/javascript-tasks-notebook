const { getProves } = require('./A');

describe('483A. Counterexample', () => {
  it.each`
    n    | l                      | r                      | result
    ${1} | ${2n}                  | ${4n}                  | ${[2n, 3n, 4n]}
    ${2} | ${10n}                 | ${11n}                 | ${[-1n]}
    ${2} | ${900000000000000009n} | ${900000000000000029n} | ${[900000000000000010n, 900000000000000011n, 900000000000000012n]}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getProves(l, r)).toStrictEqual(result);
  });
});
