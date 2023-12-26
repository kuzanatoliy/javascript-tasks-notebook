const { getMediumNumber } = require('./A');

describe('1760A. Medium Number', () => {
  it.each`
    n    | numbers         | result
    ${1} | ${[5, 2, 6]}    | ${5}
    ${2} | ${[14, 3, 4]}   | ${4}
    ${3} | ${[20, 2, 1]}   | ${2}
    ${4} | ${[1, 2, 3]}    | ${2}
    ${5} | ${[11, 19, 12]} | ${12}
    ${6} | ${[10, 8, 20]}  | ${10}
    ${7} | ${[6, 20, 3]}   | ${6}
    ${8} | ${[4, 1, 3]}    | ${3}
    ${9} | ${[19, 8, 4]}   | ${8}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMediumNumber(numbers)).toBe(result);
  });
});
