const { isItPossibleToBuild } = require('./D');

describe("1999D. Slavic's Exam", () => {
  it.each`
    n    | str        | map        | result
    ${1} | ${'?????'} | ${'xbx'}   | ${['YES', 'xbxaa']}
    ${2} | ${'ab??e'} | ${'abcde'} | ${['YES', 'abcde']}
    ${3} | ${'ayy?x'} | ${'a'}     | ${['YES', 'ayyax']}
    ${4} | ${'ab??e'} | ${'dac'}   | ${['NO']}
    ${5} | ${'paiu'}  | ${'mom'}   | ${['NO']}
  `('Base test: $n', ({ str, map, result }) => {
    expect(isItPossibleToBuild(str, map)).toStrictEqual(result);
  });
});
