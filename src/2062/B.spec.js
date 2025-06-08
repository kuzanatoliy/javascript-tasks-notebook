const { isItPossibleToContinue } = require('./B');

describe('2062B. Clockwork', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[4, 10]}              | ${'YES'}
    ${2} | ${[2, 2]}               | ${'NO'}
    ${3} | ${[4, 10, 5]}           | ${'NO'}
    ${4} | ${[5, 3, 5]}            | ${'YES'}
    ${5} | ${[12, 13, 25, 17, 30]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToContinue(arr)).toBe(result);
  });
});
