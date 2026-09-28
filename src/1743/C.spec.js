const { getSurviveCount } = require('./C');

describe('1743C. Save the Magazines', () => {
  it.each`
    n    | map         | arr                        | result
    ${1} | ${'01110'}  | ${[10, 5, 8, 9, 6]}        | ${27}
    ${2} | ${'011011'} | ${[20, 10, 9, 30, 20, 19]} | ${80}
    ${3} | ${'0000'}   | ${[100, 100, 100, 100]}    | ${0}
    ${4} | ${'0111'}   | ${[5, 4, 5, 1]}            | ${14}
  `('Base test: $n', ({ map, arr, result }) => {
    expect(getSurviveCount(map, arr)).toStrictEqual(result);
  });
});
