const { isItPossibleToChange } = require('./B');

describe('1971B. Different String', () => {
  it.each`
    n    | string          | result
    ${1} | ${'codeforces'} | ${['YES', 'secrofedoc']}
    ${2} | ${'aaaaa'}      | ${['NO']}
    ${3} | ${'xxxxy'}      | ${['YES', 'yxxxx']}
    ${4} | ${'co'}         | ${['YES', 'oc']}
    ${5} | ${'d'}          | ${['NO']}
    ${6} | ${'nutdealer'}  | ${['YES', 'relaedtun']}
    ${7} | ${'mwistht'}    | ${['YES', 'thtsiwm']}
    ${8} | ${'hhhhhhhhhh'} | ${['NO']}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToChange(string)).toStrictEqual(result);
  });
});
