const { getCountOfNotes } = require('./B');

describe('1466B. Last minute enhancements', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 2, 2, 5, 6]} | ${5}
    ${2} | ${[4, 4]}             | ${2}
    ${3} | ${[1, 1, 3, 4, 4, 5]} | ${6}
    ${4} | ${[1]}                | ${1}
    ${5} | ${[1, 1, 1, 2, 2, 2]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfNotes(arr)).toBe(result);
  });
});
