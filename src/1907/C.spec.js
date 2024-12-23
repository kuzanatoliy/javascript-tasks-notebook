const { getStrLength } = require('./C');

describe('1907C. Removal of Unattractive Pairs', () => {
  it.each`
    n     | data            | result
    ${1}  | ${'aabc'}       | ${0}
    ${2}  | ${'abaca'}      | ${1}
    ${3}  | ${'avbvvcvvvd'} | ${2}
    ${4}  | ${'abcdefg'}    | ${1}
    ${5}  | ${'dabbb'}      | ${1}
    ${6}  | ${'aacebeaa'}   | ${0}
    ${7}  | ${'bbbbacc'}    | ${1}
    ${8}  | ${'dacfcc'}     | ${0}
    ${9}  | ${'fdfcdc'}     | ${0}
    ${10} | ${'dbdcfbbdc'}  | ${1}
  `('Base test: $n', ({ data, result }) => {
    expect(getStrLength(data)).toBe(result);
  });
});
