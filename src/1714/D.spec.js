const { getCountOfOperations } = require('./D');

describe('1714C. Minimum Varied Number', () => {
  it.each`
    n    | str                   | arr                                 | result
    ${1} | ${'bababa'}           | ${['ba', 'aba']}                    | ${[3, [1, 1], [1, 3], [1, 5]]}
    ${2} | ${'caba'}             | ${['bac', 'acab']}                  | ${[-1]}
    ${3} | ${'abacabaca'}        | ${['aba', 'bac', 'aca']}            | ${[4, [1, 1], [3, 3], [2, 6], [3, 7]]}
    ${4} | ${'baca'}             | ${['a', 'c', 'b']}                  | ${[4, [3, 1], [1, 2], [2, 3], [1, 4]]}
    ${5} | ${'codeforces'}       | ${['def', 'code', 'efo', 'forces']} | ${[2, [2, 1], [4, 5]]}
    ${6} | ${'aaaabbbbcccceeee'} | ${['eeee', 'cccc', 'aaaa', 'bbbb']} | ${[4, [3, 1], [4, 5], [2, 9], [1, 13]]}
  `('Base test: $n', ({ str, arr, result }) => {
    expect(getCountOfOperations(str, arr)).toStrictEqual(result);
  });
});
