const { getLongestUncommonSubString } = require('./A');

describe('766B. Mahmoud and a Triangle', () => {
  it.each`
    n    | strA      | strB       | result
    ${1} | ${'abcd'} | ${'defgh'} | ${5}
    ${2} | ${'a'}    | ${'a'}     | ${-1}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(getLongestUncommonSubString(strA, strB)).toBe(result);
  });
});
