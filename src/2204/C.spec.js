const { getCountOfLitersOfWater } = require('./C');

describe('2204A. Parkour Design', () => {
  it.each`
    n    | a          | b        | c          | m                      | result
    ${1} | ${2n}      | ${1n}    | ${3n}      | ${10n}                 | ${[14n, 38n, 8n]}
    ${2} | ${1n}      | ${1n}    | ${8n}      | ${5n}                  | ${[15n, 15n, 0n]}
    ${3} | ${6n}      | ${20n}   | ${15n}     | ${1000n}               | ${[881n, 236n, 281n]}
    ${4} | ${650650n} | ${1092n} | ${157437n} | ${100000000000000000n} | ${[845294870595n, 549337065358857n, 3774389867286n]}
  `('Base test: $n', ({ a, b, c, m, result }) => {
    expect(getCountOfLitersOfWater(a, b, c, m)).toStrictEqual(result);
  });
});
