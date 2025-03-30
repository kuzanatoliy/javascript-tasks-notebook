const { getCenter } = require('./A');

describe('1028A. Find Square', () => {
  it.each`
    n    | results                                                                                                                                                             | result
    ${1} | ${[['W', 'W', 'B', 'B', 'B', 'W'], ['W', 'W', 'B', 'B', 'B', 'W'], ['W', 'W', 'B', 'B', 'B', 'W'], ['W', 'W', 'W', 'W', 'W', 'W'], ['W', 'W', 'W', 'W', 'W', 'W']]} | ${[2, 4]}
    ${2} | ${[['W', 'W', 'W'], ['B', 'W', 'W'], ['W', 'W', 'W']]}                                                                                                              | ${[2, 1]}
  `('Base test: $n', ({ results, result }) => {
    expect(getCenter(results)).toStrictEqual(result);
  });
});
