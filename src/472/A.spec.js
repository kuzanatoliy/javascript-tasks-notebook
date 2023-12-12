const { getParts } = require('./A');

describe('469A. I Wanna Be the Guy', () => {
  it.each`
    n    | number     | result
    ${1} | ${12}      | ${[4, 8]}
    ${2} | ${15}      | ${[9, 6]}
    ${3} | ${23}      | ${[9, 14]}
    ${4} | ${1000000} | ${[4, 999996]}
  `('Base test: $n', ({ number, result }) => {
    expect(getParts(number)).toStrictEqual(result);
  });
});
