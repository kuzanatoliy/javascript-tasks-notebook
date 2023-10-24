const { checkCountOfStepsToCreateBeautifulMatrix } = require('./A');

describe('263A. Beautiful Matrix', () => {
  it.each`
    n    | matrix                                                                                   | result
    ${1} | ${[[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]} | ${2}
    ${2} | ${[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]} | ${1}
  `('Base test: $n', ({ matrix, result }) => {
    expect(checkCountOfStepsToCreateBeautifulMatrix(matrix)).toBe(result);
  });
});
