const { getMinMaxCount } = require('./A');

describe('1679A. AvtoBus', () => {
  it.each`
    n    | str                    | result
    ${1} | ${4n}                  | ${[1n, 1n]}
    ${2} | ${7n}                  | ${[-1n]}
    ${3} | ${24n}                 | ${[4n, 6n]}
    ${4} | ${998244353998244352n} | ${[166374058999707392n, 249561088499561088n]}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinMaxCount(str)).toStrictEqual(result);
  });
});
