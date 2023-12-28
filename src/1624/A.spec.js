const { getCountOfOperations } = require('./A');

describe('1624A. Plus One on the Subset', () => {
  it.each`
    n    | numbers               | result
    ${1} | ${[3, 4, 2, 4, 1, 2]} | ${3}
    ${2} | ${[1000, 1002, 998]}  | ${4}
    ${3} | ${[12, 11]}           | ${1}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getCountOfOperations(numbers)).toBe(result);
  });
});
