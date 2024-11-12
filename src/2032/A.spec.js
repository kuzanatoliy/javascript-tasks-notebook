const { getCountOfLights } = require('./A');

describe('2032A. Circuit', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[0, 0]}             | ${[0, 0]}
    ${2} | ${[0, 1]}             | ${[1, 1]}
    ${3} | ${[1, 1]}             | ${[0, 0]}
    ${4} | ${[0, 0, 1, 0, 1, 0]} | ${[0, 2]}
    ${5} | ${[0, 1, 1, 1, 0, 0]} | ${[1, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfLights(arr)).toStrictEqual(result);
  });
});
