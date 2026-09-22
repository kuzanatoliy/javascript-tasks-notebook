const { transformArray } = require('./A');

describe('1406A. Ahahahahahahahaha', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 0]}       | ${[0]}
    ${2} | ${[0, 0]}       | ${[0, 0]}
    ${3} | ${[0, 1, 1, 1]} | ${[1, 1]}
    ${4} | ${[1, 1, 0, 0]} | ${[0, 0]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
