const { getLength } = require('./C');

describe('1335C. Two Teams Composing', () => {
  it.each`
    n    | students                 | result
    ${1} | ${[4, 2, 4, 1, 4, 3, 4]} | ${3}
    ${2} | ${[2, 1, 5, 4, 3]}       | ${1}
    ${3} | ${[1]}                   | ${0}
    ${4} | ${[1, 1, 1, 3]}          | ${2}
  `('Base test: $n', ({ students, result }) => {
    expect(getLength(students)).toBe(result);
  });
});
