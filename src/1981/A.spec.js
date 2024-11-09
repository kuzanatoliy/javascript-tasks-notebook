const { getCountOfSteps } = require('./A');

describe('1981A. Turtle and Piggy Are Playing a Game', () => {
  it.each`
    n    | l         | r          | result
    ${1} | ${2}      | ${4}       | ${2}
    ${2} | ${3}      | ${6}       | ${2}
    ${3} | ${2}      | ${15}      | ${3}
    ${4} | ${6}      | ${22}      | ${4}
    ${5} | ${114514} | ${1919810} | ${20}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getCountOfSteps(l, r)).toBe(result);
  });
});
