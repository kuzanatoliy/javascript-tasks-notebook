const { getCountOfSteps } = require('./A');

describe('1804A. Lame King', () => {
  it.each`
    n    | r     | c     | result
    ${1} | ${-4} | ${1}  | ${7}
    ${2} | ${4}  | ${4}  | ${8}
    ${3} | ${0}  | ${-6} | ${11}
    ${4} | ${-5} | ${-4} | ${9}
    ${5} | ${7}  | ${-8} | ${15}
  `('Base test: $n', ({ r, c, result }) => {
    expect(getCountOfSteps(r, c)).toBe(result);
  });
});
