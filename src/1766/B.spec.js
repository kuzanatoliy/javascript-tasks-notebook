const { isItPossibleToBuildString } = require('./B');

describe('1766B. Notepad#', () => {
  it.each`
    n    | str                   | result
    ${1} | ${'codeforces'}       | ${'NO'}
    ${2} | ${'labacaba'}         | ${'YES'}
    ${3} | ${'uohhh'}            | ${'NO'}
    ${4} | ${'isthissuffixtree'} | ${'YES'}
    ${5} | ${'x'}                | ${'NO'}
    ${6} | ${'momo'}             | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToBuildString(str)).toBe(result);
  });
});
