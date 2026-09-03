const { getMinStrLength } = require('./B');

describe('2254B. Evanescent', () => {
  it.each`
    n    | str                     | result
    ${1} | ${'abb'}                | ${2}
    ${2} | ${'aab'}                | ${2}
    ${3} | ${'abc'}                | ${2}
    ${4} | ${'abaa'}               | ${1}
    ${5} | ${'abba'}               | ${3}
    ${6} | ${'eeeee'}              | ${1}
    ${7} | ${'yyssee'}             | ${3}
    ${8} | ${'abacaba'}            | ${5}
    ${9} | ${'goodluckandhavefun'} | ${16}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinStrLength(str)).toBe(result);
  });
});
