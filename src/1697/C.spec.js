const { isItPossibleToTransform } = require('./C');

describe("1697C. awoo's Favorite Problem", () => {
  it.each`
    n    | s               | t               | result
    ${1} | ${'cab'}        | ${'cab'}        | ${'YES'}
    ${1} | ${'a'}          | ${'b'}          | ${'NO'}
    ${1} | ${'abbabc'}     | ${'bbaacb'}     | ${'YES'}
    ${1} | ${'bcaabababc'} | ${'cbbababaac'} | ${'YES'}
    ${1} | ${'ba'}         | ${'ab'}         | ${'NO'}
  `('Base test: $n', ({ s, t, result }) => {
    expect(isItPossibleToTransform(s, t)).toStrictEqual(result);
  });
});
