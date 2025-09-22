const { getOrder } = require('./A');

describe('1057A. Bmail Computer Network', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 1, 2, 2, 3, 2, 5]} | ${[1, 2, 5, 8]}
    ${2} | ${[1, 2, 3, 4, 5]}       | ${[1, 2, 3, 4, 5, 6]}
    ${3} | ${[1, 1, 2, 3, 4, 3]}    | ${[1, 3, 7]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOrder(arr)).toStrictEqual(result);
  });
});
