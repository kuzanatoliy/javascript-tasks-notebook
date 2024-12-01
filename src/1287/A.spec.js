const { getTerm } = require('./A');

describe('1287A. Angry Students', () => {
  it.each`
    n    | str               | result
    ${1} | ${'PPAP'}         | ${1}
    ${2} | ${'APPAPPPAPPPP'} | ${4}
    ${3} | ${'AAP'}          | ${1}
    ${4} | ${'PPA'}          | ${0}
    ${5} | ${'P'}            | ${0}
    ${6} | ${'PPP'}          | ${0}
  `('Base test: $n', ({ str, result }) => {
    expect(getTerm(str)).toBe(result);
  });
});
