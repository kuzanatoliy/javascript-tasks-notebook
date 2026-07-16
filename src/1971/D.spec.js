const { getPicesCount } = require('./D');

describe('1971C. Clock and Strings', () => {
  it.each`
    n    | str           | result
    ${1} | ${'11010'}    | ${3}
    ${2} | ${'00000000'} | ${1}
    ${3} | ${'1'}        | ${1}
    ${4} | ${'10'}       | ${2}
    ${5} | ${'0001111'}  | ${1}
    ${6} | ${'0110'}     | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getPicesCount(str)).toStrictEqual(result);
  });
});
