const { reconstructString } = require('./B');

describe("747B. Mammoth's Genome Decoding", () => {
  it.each`
    n    | num           | result
    ${1} | ${'AG?C??CT'} | ${'AGACGTCT'}
    ${2} | ${'AGCT'}     | ${'AGCT'}
    ${3} | ${'????G?'}   | ${'==='}
    ${4} | ${'AA??'}     | ${'==='}
  `('Base test: $n', ({ num, result }) => {
    expect(reconstructString(num)).toBe(result);
  });
});
