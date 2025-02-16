const { getGems } = require('./A');

describe('987A. Infinity Gauntlet', () => {
  it.each`
    n    | arr                                      | result
    ${1} | ${['red', 'purple', 'yellow', 'orange']} | ${['Time', 'Space']}
    ${2} | ${[]}                                    | ${['Power', 'Time', 'Space', 'Soul', 'Reality', 'Mind']}
  `('Base test: $n', ({ arr, result }) => {
    expect(getGems(arr)).toStrictEqual(result);
  });
});
