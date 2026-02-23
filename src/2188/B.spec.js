const { getMinCountOfSeatedStudents } = require('./B');

describe('2191B. Seats', () => {
  it.each`
    n    | s                  | result
    ${1} | ${'0'}             | ${1}
    ${2} | ${'000'}           | ${1}
    ${3} | ${'00000'}         | ${2}
    ${4} | ${'100101'}        | ${3}
    ${5} | ${'0000100001000'} | ${5}
    ${6} | ${'1'}             | ${1}
    ${7} | ${'001'}           | ${2}
    ${8} | ${'00'}            | ${1}
    ${9} | ${'0000'}          | ${2}
  `('Base test: $n', ({ s, result }) => {
    expect(getMinCountOfSeatedStudents(s)).toBe(result);
  });
});
