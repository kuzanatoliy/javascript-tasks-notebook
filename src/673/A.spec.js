const { getDelay } = require('./A');

describe('673A. Bear and Game', () => {
  it.each`
    n    | array                                   | result
    ${1} | ${[7, 20, 88]}                          | ${35}
    ${2} | ${[16, 20, 30, 40, 50, 60, 70, 80, 90]} | ${15}
    ${3} | ${[15, 20, 30, 40, 50, 60, 70, 80, 90]} | ${90}
  `('Base test: $n', ({ array, result }) => {
    expect(getDelay(array)).toBe(result);
  });
});
