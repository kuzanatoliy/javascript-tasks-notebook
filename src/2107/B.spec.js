const { getWinner } = require('./B');

describe('2107B. Apples in Boxes', () => {
  it.each`
    n    | k    | arr          | result
    ${1} | ${1} | ${[2, 1, 2]} | ${'Tom'}
    ${2} | ${1} | ${[1, 1, 3]} | ${'Tom'}
    ${3} | ${1} | ${[1, 4]}    | ${'Jerry'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getWinner(k, arr)).toStrictEqual(result);
  });
});
