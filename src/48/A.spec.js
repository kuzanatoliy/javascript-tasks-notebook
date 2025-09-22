const { getWinner } = require('./A');

describe('48A. Rock-paper-scissors', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${['rock', 'rock', 'rock']}      | ${'?'}
    ${2} | ${['paper', 'rock', 'rock']}     | ${'F'}
    ${3} | ${['scissors', 'rock', 'rock']}  | ${'?'}
    ${4} | ${['scissors', 'paper', 'rock']} | ${'?'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
