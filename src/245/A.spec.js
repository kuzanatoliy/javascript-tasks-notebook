const { getState } = require('./A');

describe('245A. System Administrator', () => {
  it.each`
    n    | pings                                   | result
    ${1} | ${[[1, 5, 5], [2, 6, 4]]}               | ${['LIVE', 'LIVE']}
    ${2} | ${[[1, 0, 10], [2, 0, 10], [1, 10, 0]]} | ${['LIVE', 'DEAD']}
  `('Base test: $n', ({ pings, result }) => {
    expect(getState(pings)).toStrictEqual(result);
  });
});
