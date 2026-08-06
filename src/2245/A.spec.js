const { getOperationsCount } = require('./A');

describe('2245A. Who Watches the Watchpig?', () => {
  it.each`
    n    | k    | str               | result
    ${1} | ${1} | ${'LLL'}          | ${1}
    ${2} | ${3} | ${'LRLR'}         | ${-1}
    ${3} | ${2} | ${'RLLRRL'}       | ${2}
    ${4} | ${4} | ${'LRLLRRLRLRLR'} | ${5}
  `('Base test: $n', ({ k, str, result }) => {
    expect(getOperationsCount(k, str)).toBe(result);
  });
});
