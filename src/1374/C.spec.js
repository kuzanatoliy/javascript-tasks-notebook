const { getCountOfMovedBrackets } = require('./C');

describe('1374C. Move Brackets', () => {
  it.each`
    n    | number          | result
    ${1} | ${')('}         | ${1}
    ${2} | ${'()()'}       | ${0}
    ${3} | ${'())()()('}   | ${1}
    ${4} | ${')))((((())'} | ${3}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfMovedBrackets(number)).toBe(result);
  });
});
