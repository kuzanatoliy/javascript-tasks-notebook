const { getPositions } = require('./B');

describe('2162B. Beautiful String', () => {
  it.each`
    n    | str           | result
    ${1} | ${'010'}      | ${[1, 3]}
    ${2} | ${'001'}      | ${[1, 2]}
    ${3} | ${'00111'}    | ${[1, 2]}
    ${4} | ${'11010011'} | ${[3, 5, 6]}
    ${5} | ${'100101'}   | ${[2, 3, 5]}
  `('Base test: $n', ({ str, result }) => {
    expect(getPositions(str)).toStrictEqual(result);
  });
});
