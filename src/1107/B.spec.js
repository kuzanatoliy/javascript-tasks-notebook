const { getDigitalRoot } = require('./B');

describe('1107B. Digital root', () => {
  it.each`
    n    | k    | x    | result
    ${1} | ${1} | ${5} | ${5}
    ${2} | ${5} | ${2} | ${38}
    ${3} | ${3} | ${1} | ${19}
  `('Base test: $n', ({ k, x, result }) => {
    expect(getDigitalRoot(k, x)).toBe(result);
  });
});
