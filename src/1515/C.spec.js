const { isItPossibleToBuildTowers } = require('./C');

describe('1515C. Phoenix and Towers', () => {
  it.each`
    n    | array              | towers | result
    ${1} | ${[1, 2, 3, 1, 2]} | ${2}   | ${['YES', [1, 1, 1, 2, 2]]}
    ${2} | ${[1, 1, 2, 3]}    | ${3}   | ${['YES', [1, 2, 3, 1]]}
  `('Base test: $n', ({ array, towers, result }) => {
    expect(isItPossibleToBuildTowers(array, towers)).toStrictEqual(result);
  });
});
