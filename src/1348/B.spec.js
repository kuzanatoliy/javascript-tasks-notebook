const { getBeautifulArray } = require('./B');

describe('1348B. Phoenix and Beauty', () => {
  it.each`
    n    | number | array           | result
    ${1} | ${2}   | ${[1, 2, 2, 1]} | ${[1, 2, 1, 2, 1, 2, 1, 2]}
    ${2} | ${3}   | ${[1, 2, 2, 1]} | ${[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]}
    ${3} | ${2}   | ${[1, 2, 3]}    | ${-1}
    ${4} | ${4}   | ${[4, 3, 4, 2]} | ${[4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1]}
  `('Base test: $n', ({ number, array, result }) => {
    expect(getBeautifulArray(number, array)).toStrictEqual(result);
  });
});
