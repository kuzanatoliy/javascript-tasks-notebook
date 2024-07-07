const { getOriginalString } = require('./B');

describe('1729A. Two Elevators', () => {
  it.each`
    n    | string                  | result
    ${1} | ${'315045'}             | ${'code'}
    ${2} | ${'1100'}               | ${'aj'}
    ${3} | ${'1213121'}            | ${'abacaba'}
    ${4} | ${'120120'}             | ${'ll'}
    ${5} | ${'315045615018035190'} | ${'codeforces'}
    ${6} | ${'1111110'}            | ${'aaaak'}
    ${7} | ${'1111100'}            | ${'aaaaj'}
    ${8} | ${'11111'}              | ${'aaaaa'}
    ${9} | ${'2606'}               | ${'zf'}
  `('Base test: $n', ({ string, result }) => {
    expect(getOriginalString(string)).toBe(result);
  });
});
