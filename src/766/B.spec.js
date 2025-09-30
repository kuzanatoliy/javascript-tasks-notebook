const { isItPossibleToBuildTriangle } = require('./B');

describe('766B. Mahmoud and a Triangle', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 5, 3, 2, 4]} | ${'YES'}
    ${2} | ${[4, 1, 2]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToBuildTriangle(arr)).toBe(result);
  });
});
