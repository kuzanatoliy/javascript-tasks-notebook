const { getMinAriaOfSquare } = require('./A');

describe('1560A. Dislike of Threes', () => {
  it.each`
    n    | width  | height | result
    ${1} | ${3}   | ${2}   | ${16}
    ${2} | ${4}   | ${2}   | ${16}
    ${3} | ${1}   | ${1}   | ${4}
    ${4} | ${3}   | ${1}   | ${9}
    ${5} | ${4}   | ${7}   | ${64}
    ${6} | ${1}   | ${3}   | ${9}
    ${7} | ${7}   | ${4}   | ${64}
    ${8} | ${100} | ${100} | ${40000}
  `('Base test: $n', ({ width, height, result }) => {
    expect(getMinAriaOfSquare(width, height)).toBe(result);
  });
});
