const { couldItHaveBeenTheImportantInteger } = require('./A');

describe('2000A. Primary Task', () => {
  it.each`
    n    | number  | result
    ${1} | ${100}  | ${'NO'}
    ${2} | ${1010} | ${'YES'}
    ${3} | ${101}  | ${'NO'}
    ${4} | ${105}  | ${'YES'}
    ${5} | ${2033} | ${'NO'}
    ${6} | ${1019} | ${'YES'}
    ${7} | ${1002} | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(couldItHaveBeenTheImportantInteger(number)).toBe(result);
  });
});
