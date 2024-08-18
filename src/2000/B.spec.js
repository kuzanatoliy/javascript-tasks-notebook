const { isTheAllPassengersFollowedTheRecommendations } = require('./B');

describe('2000B. Seating in a Bus', () => {
  it.each`
    n    | array              | result
    ${1} | ${[5, 4, 2, 1, 3]} | ${'NO'}
    ${2} | ${[2, 3, 1]}       | ${'YES'}
    ${3} | ${[2, 3, 1, 4]}    | ${'YES'}
    ${4} | ${[1, 2, 3, 5, 4]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isTheAllPassengersFollowedTheRecommendations(array)).toBe(result);
  });
});
