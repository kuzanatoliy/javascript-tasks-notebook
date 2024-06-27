const { getMinInteger } = require('./B');

describe('1362B. Johnny and His Hobbies', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[1, 0, 2, 3]}          | ${1}
    ${2} | ${[10, 7, 14, 8, 3, 12]} | ${4}
    ${3} | ${[0, 2]}                | ${2}
    ${4} | ${[1, 2, 3]}             | ${-1}
    ${5} | ${[1, 4, 6, 10, 11, 12]} | ${-1}
    ${6} | ${[0, 1023]}             | ${1023}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinInteger(array)).toBe(result);
  });
});
