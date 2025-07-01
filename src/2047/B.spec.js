const { transformStr } = require('./B');

describe('2047A. Alyona and a Square Jigsaw Puzzle', () => {
  it.each`
    n    | str             | result
    ${1} | ${'abc'}        | ${'aac'}
    ${2} | ${'xyyx'}       | ${'xxyx'}
    ${3} | ${'alphabet'}   | ${'aaphabet'}
    ${4} | ${'k'}          | ${'k'}
    ${5} | ${'aabbccddee'} | ${'aaabccddee'}
    ${6} | ${'ttbddq'}     | ${'tttddq'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformStr(str)).toBe(result);
  });
});
