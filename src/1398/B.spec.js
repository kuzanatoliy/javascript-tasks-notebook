const { getScore } = require('./B');

describe('1398B. Substring Removal Game', () => {
  it.each`
    n    | numbers           | result
    ${1} | ${'01111001'}     | ${4}
    ${2} | ${'0000'}         | ${0}
    ${3} | ${'111111'}       | ${6}
    ${4} | ${'101010101'}    | ${3}
    ${5} | ${'011011110111'} | ${6}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getScore(numbers)).toBe(result);
  });
});
