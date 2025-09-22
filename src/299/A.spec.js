const { isItPossibleToReachTheEnd } = require('./A');

describe('299B. Ksusha the Squirrel', () => {
  it.each`
    n    | map          | k    | result
    ${1} | ${'..'}      | ${1} | ${'YES'}
    ${2} | ${'.#.#'}    | ${2} | ${'YES'}
    ${3} | ${'.#.###.'} | ${3} | ${'NO'}
  `('Base test: $n', ({ map, k, result }) => {
    expect(isItPossibleToReachTheEnd(map, k)).toBe(result);
  });
});
