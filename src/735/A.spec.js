const { isItPossibleToTouch } = require('./A');

describe('735A. Ostap and Grasshopper', () => {
  it.each`
    n    | map          | k    | result
    ${1} | ${'#G#T#'}   | ${2} | ${'YES'}
    ${2} | ${'T....G'}  | ${1} | ${'YES'}
    ${3} | ${'T..#..G'} | ${3} | ${'NO'}
    ${4} | ${'..GT..'}  | ${2} | ${'NO'}
  `('Base test: $n', ({ map, k, result }) => {
    expect(isItPossibleToTouch(map, k)).toBe(result);
  });
});
