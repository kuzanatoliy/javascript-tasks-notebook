const { getNumber } = require('./B');

describe('1669B. Triple', () => {
  it.each`
    n    | numbers                        | result
    ${1} | ${[1]}                         | ${-1}
    ${2} | ${[2, 2, 2]}                   | ${2}
    ${3} | ${[2, 2, 3, 3, 4, 2, 2]}       | ${2}
    ${4} | ${[1, 4, 3, 4, 3, 2, 4, 1]}    | ${4}
    ${5} | ${[1, 1, 1, 2, 2, 2, 3, 3, 3]} | ${1}
    ${6} | ${[1, 5, 2, 4, 3]}             | ${-1}
    ${7} | ${[4, 4, 4, 4]}                | ${4}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getNumber(numbers)).toBe(result);
  });
});
