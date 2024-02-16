const { isItPossibleToPassCandy } = require('./B');

describe('1791B. Following Directions', () => {
  it.each`
    n    | string           | result
    ${1} | ${'UUURDDL'}     | ${'YES'}
    ${2} | ${'UR'}          | ${'YES'}
    ${3} | ${'RRRUUDDD'}    | ${'NO'}
    ${4} | ${'LLL'}         | ${'NO'}
    ${5} | ${'DUUR'}        | ${'YES'}
    ${6} | ${'RUDLL'}       | ${'YES'}
    ${7} | ${'LLLLDDRUDRD'} | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToPassCandy(string)).toBe(result);
  });
});
