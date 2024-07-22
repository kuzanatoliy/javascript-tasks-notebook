const { getOrder } = require('./B');

describe('1914B. Preparing for the Contest', () => {
  it.each`
    n    | n    | k    | result
    ${1} | ${6} | ${2} | ${[4, 3, 2, 1, 5, 6]}
    ${2} | ${5} | ${4} | ${[1, 2, 3, 4, 5]}
    ${3} | ${5} | ${0} | ${[5, 4, 3, 2, 1]}
  `('Base test: $n', ({ n, k, result }) => {
    expect(getOrder(n, k)).toStrictEqual(result);
  });
});
