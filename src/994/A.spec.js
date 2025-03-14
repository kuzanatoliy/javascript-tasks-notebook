const { getCode } = require('./A');

describe('994A. Fingerprints', () => {
  it.each`
    n    | kb                       | keys            | result
    ${1} | ${[3, 5, 7, 1, 6, 2, 8]} | ${[1, 2, 7]}    | ${[7, 1, 2]}
    ${2} | ${[3, 4, 1, 0]}          | ${[0, 1, 7, 9]} | ${[1, 0]}
  `('Base test: $n', ({ kb, keys, result }) => {
    expect(getCode(kb, keys)).toStrictEqual(result);
  });
});
