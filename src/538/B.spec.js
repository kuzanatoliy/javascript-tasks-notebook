const { getBinaryNumbers } = require('./B');

describe('538B. Quasi Binary', () => {
  it.each`
    n    | number | result
    ${1} | ${9}   | ${['1', '1', '1', '1', '1', '1', '1', '1', '1']}
    ${2} | ${32}  | ${['11', '11', '10']}
  `('Base test: $n', ({ number, result }) => {
    expect(getBinaryNumbers(number)).toStrictEqual(result);
  });
});
