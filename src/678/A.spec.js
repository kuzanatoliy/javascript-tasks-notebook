const { getX } = require('./A');

describe('678A. Johny Likes Numbers', () => {
  it.each`
    n    | num   | k     | result
    ${1} | ${5}  | ${3}  | ${6}
    ${2} | ${25} | ${13} | ${26}
    ${3} | ${26} | ${13} | ${39}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getX(num, k)).toBe(result);
  });
});
