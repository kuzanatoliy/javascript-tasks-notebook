const { getShuffledVersionOfTheArray } = require('./B');

describe('1312B. Bogosort', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[7]}                | ${[7]}
    ${2} | ${[1, 1, 3, 5]}       | ${[5, 3, 1, 1]}
    ${3} | ${[3, 2, 1, 5, 6, 4]} | ${[6, 5, 4, 3, 2, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getShuffledVersionOfTheArray(array)).toStrictEqual(result);
  });
});
