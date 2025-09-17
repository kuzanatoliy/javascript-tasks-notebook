const { getInteger } = require('./B');

describe('2140B. Another Divisibility Problem', () => {
  it.each`
    n    | num        | result
    ${1} | ${8}       | ${16}
    ${2} | ${42}      | ${84}
    ${3} | ${1000}    | ${2000}
    ${4} | ${66666}   | ${133332}
    ${5} | ${106344}  | ${212688}
    ${6} | ${9876543} | ${19753086}
  `('Base test: $n', ({ num, result }) => {
    expect(getInteger(num)).toBe(result);
  });
});
