const { getResult } = require('./A');

describe('1389A. LCM Problem', () => {
  it.each`
    n    | a     | b       | result
    ${1} | ${1}  | ${1337} | ${[1, 2]}
    ${2} | ${13} | ${69}   | ${[13, 26]}
    ${3} | ${2}  | ${4}    | ${[2, 4]}
    ${4} | ${88} | ${89}   | ${[-1, -1]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getResult(a, b)).toStrictEqual(result);
  });
});
