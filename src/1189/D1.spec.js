const { isConfigurationOfRealNumbers } = require('./D1');

describe('1189D1. Add on a Tree', () => {
  it.each`
    n    | nodes | pathes                                      | result
    ${1} | ${2}  | ${[[1, 2]]}                                 | ${'YES'}
    ${2} | ${3}  | ${[[1, 2], [2, 3]]}                         | ${'NO'}
    ${3} | ${5}  | ${[[1, 2], [1, 3], [1, 4], [2, 5]]}         | ${'NO'}
    ${4} | ${6}  | ${[[1, 2], [1, 3], [1, 4], [2, 5], [2, 6]]} | ${'YES'}
  `('Base test: $n', ({ nodes, pathes, result }) => {
    expect(isConfigurationOfRealNumbers(nodes, pathes)).toBe(result);
  });
});
