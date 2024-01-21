const { isSolution } = require('./B');

describe('1189B. Number Circle', () => {
  it.each`
    n    | numbers               | result
    ${1} | ${[2, 4, 3]}          | ${['YES', '2 4 3']}
    ${2} | ${[1, 2, 3, 4, 4]}    | ${['YES', '3 4 4 2 1']}
    ${3} | ${[13, 8, 5]}         | ${['NO']}
    ${4} | ${[1, 10, 100, 1000]} | ${['NO']}
  `('Base test: $n', ({ numbers, result }) => {
    expect(isSolution(numbers)).toStrictEqual(result);
  });
});
