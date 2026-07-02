const { buildArray } = require('./B');

describe('2233B. Different Distances', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[1, 2, 3, 1, 2, 3, 2, 3, 1, 1, 2, 3]}
    ${2} | ${4} | ${[1, 2, 3, 4, 1, 2, 3, 4, 2, 3, 4, 1, 1, 2, 3, 4]}
    ${3} | ${5} | ${[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildArray(num)).toStrictEqual(result);
  });
});
