const { isItPossibleToBuildTeam } = require('./A');

describe('886A. ACM ICPC', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[1, 3, 2, 1, 2, 1]}  | ${'YES'}
    ${2} | ${[1, 1, 1, 1, 1, 99]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToBuildTeam(arr)).toBe(result);
  });
});
