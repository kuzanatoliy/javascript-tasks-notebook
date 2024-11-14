const { getMinNumber } = require('./A');

describe("1688A. Cirno's Perfect Bitmasks Classroom", () => {
  it.each`
    n    | num        | result
    ${1} | ${1}       | ${3}
    ${2} | ${2}       | ${3}
    ${3} | ${5}       | ${1}
    ${4} | ${9}       | ${1}
    ${5} | ${16}      | ${17}
    ${6} | ${114514}  | ${2}
    ${7} | ${1000000} | ${64}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinNumber(num)).toBe(result);
  });
});
