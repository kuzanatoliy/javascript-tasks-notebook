const { getRow } = require('./A');

describe('721A. One-dimensional Japanese Crossword', () => {
  it.each`
    n    | map                | result
    ${1} | ${'BBW'}           | ${[2]}
    ${2} | ${'BWBWB'}         | ${[1, 1, 1]}
    ${3} | ${'WWWW'}          | ${[]}
    ${4} | ${'BBBB'}          | ${[4]}
    ${5} | ${'WBBBBWWBWBBBW'} | ${[4, 1, 3]}
  `('Base test: $n', ({ map, result }) => {
    expect(getRow(map)).toStrictEqual(result);
  });
});
