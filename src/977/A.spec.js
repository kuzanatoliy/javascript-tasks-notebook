const { getNumber } = require('./A');

describe('977A. Wrong Subtraction', () => {
  it.each`
    n    | number        | count | result
    ${1} | ${512}        | ${4}  | ${50}
    ${2} | ${1000000000} | ${9}  | ${1}
  `('Base test: $n', ({ number, count, result }) => {
    expect(getNumber(number, count)).toBe(result);
  });

  it.each`
    n    | number       | count | result
    ${1} | ${999999999} | ${50} | ${9999}
    ${2} | ${131203}    | ${9}  | ${130}
  `('Special test: $n', ({ number, count, result }) => {
    expect(getNumber(number, count)).toBe(result);
  });
});
