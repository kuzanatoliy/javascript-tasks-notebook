const { isItPossibleToTransformStrings } = require('./A');

describe('1301A. Three Strings', () => {
  it.each`
    n    | strA      | strB      | strC      | result
    ${1} | ${'aaa'}  | ${'bbb'}  | ${'ccc'}  | ${'NO'}
    ${2} | ${'abc'}  | ${'bca'}  | ${'bca'}  | ${'YES'}
    ${3} | ${'aabb'} | ${'bbaa'} | ${'baba'} | ${'YES'}
    ${4} | ${'imi'}  | ${'mii'}  | ${'iim'}  | ${'NO'}
    ${5} | ${'mio'}  | ${'imo'}  | ${'mio'}  | ${'YES'}
  `('Base test: $n', ({ strA, strB, strC, result }) => {
    expect(isItPossibleToTransformStrings(strA, strB, strC)).toBe(result);
  });
});
