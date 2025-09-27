const { getCountOfModels } = require('./A');

describe('2141A. Furniture Store', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 3]}          | ${[2, 3]}
    ${2} | ${[4, 6, 2, 1]}       | ${[2]}
    ${3} | ${[100]}              | ${[]}
    ${4} | ${[7, 5, 8, 4, 6, 2]} | ${[3, 5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfModels(arr)).toStrictEqual(result);
  });
});
