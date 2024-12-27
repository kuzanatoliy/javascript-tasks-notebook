const { isItPossibleToWin } = require('./A');

describe('2040A. Game of Division', () => {
  it.each`
    n    | array                  | k    | result
    ${1} | ${[1, 2, 3]}           | ${2} | ${['YES', 2]}
    ${2} | ${[1, 2, 4, 5]}        | ${2} | ${['NO']}
    ${3} | ${[10, 7, 3, 4, 5]}    | ${3} | ${['YES', 3]}
    ${4} | ${[1, 31, 15, 55, 36]} | ${3} | ${['NO']}
    ${4} | ${[17, 17]}            | ${1} | ${['NO']}
    ${3} | ${[17, 18]}            | ${2} | ${['YES', 1]}
    ${3} | ${[6]}                 | ${3} | ${['YES', 1]}
  `('Base test: $n', ({ array, k, result }) => {
    expect(isItPossibleToWin(array, k)).toStrictEqual(result);
  });
});
