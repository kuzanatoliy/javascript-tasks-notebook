const { isPositiveResponses } = require('./B');

describe('2167B. Your Name', () => {
  it.each`
    n    | name1        | name2        | result
    ${1} | ${'humitsa'} | ${'mitsuha'} | ${'YES'}
    ${2} | ${'orhi'}    | ${'hori'}    | ${'YES'}
    ${3} | ${'aakima'}  | ${'makima'}  | ${'NO'}
    ${4} | ${'nezuqo'}  | ${'nezuko'}  | ${'NO'}
    ${5} | ${'misaka'}  | ${'mikasa'}  | ${'YES'}
  `('Base test: $n', ({ name1, name2, result }) => {
    expect(isPositiveResponses(name1, name2)).toBe(result);
  });
});
