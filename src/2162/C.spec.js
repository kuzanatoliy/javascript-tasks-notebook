const { getSteps } = require('./C');

describe('2162C. Beautiful XOR', () => {
  it.each`
    n    | a      | b      | result
    ${1} | ${9}   | ${6}   | ${[7, 8]}
    ${2} | ${13}  | ${13}  | ${[0]}
    ${3} | ${292} | ${929} | ${-1}
    ${4} | ${405} | ${400} | ${[5]}
    ${5} | ${998} | ${244} | ${[786]}
    ${6} | ${244} | ${353} | ${-1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getSteps(a, b)).toStrictEqual(result);
  });
});
