const { getCountOfTheBestStudents } = require('./A');

describe('152A. Marks', () => {
  it.each`
    n    | scores                         | result
    ${1} | ${['223', '232', '112']}       | ${2}
    ${2} | ${['91728', '11828', '11111']} | ${3}
    ${3} | ${['2553', '6856', '5133']}    | ${2}
  `('Base test: $n', ({ scores, result }) => {
    expect(getCountOfTheBestStudents(scores)).toBe(result);
  });
});
