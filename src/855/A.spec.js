const { areStringsPresented } = require('./A');

describe("855A. Tom Riddle's Diary", () => {
  it.each`
    n    | strs                                                     | result
    ${1} | ${['tom', 'lucius', 'ginny', 'harry', 'ginny', 'harry']} | ${['NO', 'NO', 'NO', 'NO', 'YES', 'YES']}
    ${1} | ${['a', 'a', 'a']}                                       | ${['NO', 'YES', 'YES']}
  `('Base test: $n', ({ strs, result }) => {
    expect(areStringsPresented(strs)).toStrictEqual(result);
  });
});
