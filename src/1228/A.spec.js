const { getX } = require('./A');

describe('1228A. Distinct Digits', () => {
  it.each`
    n    | l        | r         | result
    ${1} | ${121}   | ${130}    | ${123}
    ${2} | ${98766} | ${100000} | ${-1}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getX(l, r)).toStrictEqual(result);
  });
});
