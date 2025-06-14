const { getVariants } = require('./B');

describe('1900A. Cover in Water', () => {
  it.each`
    n    | a      | b      | c     | result
    ${1} | ${1}   | ${1}   | ${1}  | ${[1, 1, 1]}
    ${2} | ${2}   | ${3}   | ${2}  | ${[0, 1, 0]}
    ${3} | ${82}  | ${47}  | ${59} | ${[1, 0, 0]}
    ${4} | ${100} | ${100} | ${99} | ${[0, 0, 1]}
    ${5} | ${4}   | ${29}  | ${27} | ${[1, 0, 0]}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getVariants(a, b, c)).toStrictEqual(result);
  });
});
