const { isAliceWinner } = require('./C');

describe('2030C. A TRUE Battle', () => {
  it.each`
    n    | map               | result
    ${1} | ${'11'}           | ${'YES'}
    ${2} | ${'010'}          | ${'NO'}
    ${3} | ${'101111111100'} | ${'YES'}
    ${4} | ${'0111111011'}   | ${'YES'}
    ${5} | ${'01000010'}     | ${'NO'}
    ${6} | ${'10'}           | ${'YES'}
    ${7} | ${'01'}           | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isAliceWinner(map)).toBe(result);
  });
});
