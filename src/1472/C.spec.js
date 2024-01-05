const { getMaxScore } = require('./C');

describe('1472C. Long Jumps', () => {
  it.each`
    n    | numbers                    | result
    ${1} | ${[7, 3, 1, 2, 3]}         | ${7}
    ${2} | ${[2, 1, 4]}               | ${6}
    ${3} | ${[2, 1000, 2, 3, 995, 1]} | ${1000}
    ${4} | ${[1, 1, 1, 1, 1]}         | ${5}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMaxScore(numbers)).toBe(result);
  });
});
