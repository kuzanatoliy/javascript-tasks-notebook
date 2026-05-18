const { getPositionValue } = require('./A');

describe('622B. The Time', () => {
  it.each`
    n    | position | result
    ${1} | ${3}     | ${2}
    ${2} | ${5}     | ${2}
    ${3} | ${10}    | ${4}
    ${4} | ${55}    | ${10}
    ${5} | ${56}    | ${1}
  `('Base test: $n', ({ position, result }) => {
    expect(getPositionValue(position)).toBe(result);
  });
});
