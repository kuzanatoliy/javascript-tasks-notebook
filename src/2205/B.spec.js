const { getMinNumber } = require('./B');

describe('2205A. Simons and Making It Beautiful', () => {
  it.each`
    n    | num         | result
    ${1} | ${8}        | ${2}
    ${2} | ${12}       | ${6}
    ${3} | ${369}      | ${123}
    ${4} | ${55635800} | ${2090}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinNumber(num)).toStrictEqual(result);
  });
});
