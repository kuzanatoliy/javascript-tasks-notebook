const { getPair } = require('./B');

describe('2164B. Even Modulo Pair', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[1, 3, 4, 5, 6]}      | ${[1, 3]}
    ${2} | ${[2, 3, 5, 7, 11, 13]} | ${[3, 5]}
    ${3} | ${[2, 3, 13, 37]}       | ${[-1]}
    ${3} | ${[17, 117, 1117]}      | ${[117, 1117]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPair(arr)).toStrictEqual(result);
  });
});
