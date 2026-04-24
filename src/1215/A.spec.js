const { getCountOfPlayers } = require('./A');

describe('1215A. Yellow Cards', () => {
  it.each`
    n    | a1   | a2   | k1   | k2    | num   | result
    ${1} | ${2} | ${3} | ${5} | ${1}  | ${8}  | ${[0, 4]}
    ${2} | ${3} | ${1} | ${6} | ${7}  | ${25} | ${[4, 4]}
    ${3} | ${6} | ${4} | ${9} | ${10} | ${89} | ${[5, 9]}
  `('Base test: $n', ({ a1, a2, k1, k2, num, result }) => {
    expect(getCountOfPlayers(a1, a2, k1, k2, num)).toStrictEqual(result);
  });
});
