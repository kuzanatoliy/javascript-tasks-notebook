const { getOrder } = require('./B');

describe("2060B. Farmer John's Card Game", () => {
  it.each`
    n    | matrix                    | result
    ${1} | ${[[0, 4, 2], [1, 5, 3]]} | ${[1, 2]}
    ${2} | ${[[0]]}                  | ${[1]}
    ${3} | ${[[1, 2], [0, 3]]}       | ${[-1]}
    ${4} | ${[[1], [2], [0], [3]]}   | ${[3, 1, 2, 4]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getOrder(matrix)).toStrictEqual(result);
  });
});
