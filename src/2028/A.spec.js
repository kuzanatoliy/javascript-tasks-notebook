const { isItPossibleToMeet } = require('./A');

describe('2028A. Alice\'s Adventures in "Chess"', () => {
  it.each`
    n    | x     | y     | map            | result
    ${1} | ${2}  | ${2}  | ${'NE'}        | ${'YES'}
    ${2} | ${2}  | ${2}  | ${'NNE'}       | ${'NO'}
    ${3} | ${2}  | ${1}  | ${'NNEESW'}    | ${'YES'}
    ${4} | ${10} | ${10} | ${'NNEESW'}    | ${'YES'}
    ${5} | ${4}  | ${2}  | ${'NEE'}       | ${'YES'}
    ${6} | ${5}  | ${5}  | ${'NEWS'}      | ${'NO'}
    ${7} | ${10} | ${2}  | ${'NWWNSEEES'} | ${'YES'}
  `('Base test: $n', ({ x, y, map, result }) => {
    expect(isItPossibleToMeet(x, y, map)).toBe(result);
  });
});
