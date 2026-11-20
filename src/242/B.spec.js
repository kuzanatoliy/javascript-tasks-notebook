const { getSegmentNumber } = require('./B');

describe('244B. Big Segment', () => {
  it.each`
    n    | segments                                                | result
    ${1} | ${[[1, 1], [2, 2], [3, 3]]}                             | ${-1}
    ${2} | ${[[1, 5], [2, 3], [1, 10], [7, 10], [7, 7], [10, 10]]} | ${3}
  `('Base test: $n', ({ segments, result }) => {
    expect(getSegmentNumber(segments)).toStrictEqual(result);
  });
});
