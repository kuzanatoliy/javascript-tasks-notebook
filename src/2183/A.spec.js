const { getWinner } = require('./A');

describe('2183A. Binary Array Game', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 1, 0]}          | ${'Alice'}
    ${2} | ${[1, 1, 1]}          | ${'Alice'}
    ${3} | ${[0, 1, 0]}          | ${'Bob'}
    ${4} | ${[0, 0, 0, 0]}       | ${'Bob'}
    ${5} | ${[1, 0, 1, 0, 1]}    | ${'Alice'}
    ${6} | ${[0, 1, 0, 1, 0, 1]} | ${'Alice'}
    ${7} | ${[0, 1, 0, 1, 0, 0]} | ${'Bob'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
