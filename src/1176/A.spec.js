const { getCountOfMoves } = require('./A');

describe('1176A. Divide it!', () => {
  it.each`
    n    | num                     | result
    ${1} | ${1n}                   | ${0n}
    ${2} | ${10n}                  | ${4n}
    ${3} | ${25n}                  | ${6n}
    ${4} | ${30n}                  | ${6n}
    ${5} | ${14n}                  | ${-1n}
    ${6} | ${27n}                  | ${6n}
    ${7} | ${1000000000000000000n} | ${72n}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfMoves(num)).toStrictEqual(result);
  });
});
