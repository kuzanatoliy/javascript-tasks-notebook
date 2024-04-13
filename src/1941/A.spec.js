const { getWaysNumber } = require('./A');

describe('1941A. Rudolf and the Ticket', () => {
  it.each`
    n    | price   | arrayA            | arrayB          | result
    ${1} | ${8}    | ${[1, 5, 10, 14]} | ${[2, 1, 8, 1]} | ${6}
    ${2} | ${4}    | ${[4, 8]}         | ${[1, 2, 3]}    | ${0}
    ${3} | ${7}    | ${[1, 1, 1, 1]}   | ${[2, 7]}       | ${4}
    ${4} | ${2000} | ${[1, 1, 1]}      | ${[1, 1, 1, 1]} | ${12}
  `('Base test: $n', ({ price, arrayA, arrayB, result }) => {
    expect(getWaysNumber(price, arrayA, arrayB)).toBe(result);
  });
});
