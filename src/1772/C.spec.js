const { getPossibleCharacteristicMatrix } = require('./C');

describe('1772C. Different Differences', () => {
  it.each`
    n    | length | count | result
    ${1} | ${5}   | ${9}  | ${[1, 2, 4, 7, 9]}
    ${2} | ${4}   | ${12} | ${[1, 2, 4, 12]}
    ${3} | ${3}   | ${3}  | ${[1, 2, 3]}
    ${4} | ${3}   | ${4}  | ${[1, 2, 4]}
    ${5} | ${4}   | ${4}  | ${[1, 2, 3, 4]}
    ${6} | ${4}   | ${6}  | ${[1, 2, 4, 6]}
    ${7} | ${8}   | ${11} | ${[1, 2, 4, 7, 8, 9, 10, 11]}
  `('Base test: $n', ({ length, count, result }) => {
    expect(getPossibleCharacteristicMatrix(length, count)).toStrictEqual(
      result
    );
  });
});
