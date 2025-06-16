const { getBeauty } = require('./B');

describe('1777B. Emordnilap', () => {
  it.each`
    n    | num       | result
    ${1} | ${1n}     | ${0n}
    ${2} | ${2n}     | ${4n}
    ${3} | ${100n}   | ${389456655n}
    ${4} | ${97624n} | ${727337890n}
  `('Base test: $n', ({ num, result }) => {
    expect(getBeauty(num)).toBe(result);
  });
});
