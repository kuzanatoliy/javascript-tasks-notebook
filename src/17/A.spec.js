const { canNumberBeExpressed } = require('./A');

describe('17A. Noldbach problem', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${27} | ${2} | ${'YES'}
    ${2} | ${45} | ${7} | ${'NO'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(canNumberBeExpressed(num, k)).toStrictEqual(result);
  });
});
