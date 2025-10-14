const { getArrayLength } = require('./B');

describe('1567B. MEXor Mixup', () => {
  it.each`
    n    | a    | b        | result
    ${1} | ${1} | ${1}     | ${3}
    ${2} | ${2} | ${1}     | ${2}
    ${3} | ${2} | ${0}     | ${3}
    ${4} | ${1} | ${10000} | ${2}
    ${5} | ${2} | ${10000} | ${3}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getArrayLength(a, b)).toBe(result);
  });
});
