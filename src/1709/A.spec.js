const { isItPossibleToOpenEachDoor } = require('./A');

describe('1709A. Three Doors', () => {
  it.each`
    n    | key  | doors        | result
    ${1} | ${3} | ${[0, 1, 2]} | ${'YES'}
    ${2} | ${1} | ${[0, 3, 2]} | ${'NO'}
    ${3} | ${2} | ${[3, 1, 0]} | ${'YES'}
    ${4} | ${2} | ${[1, 3, 0]} | ${'NO'}
  `('Base test: $n', ({ key, doors, result }) => {
    expect(isItPossibleToOpenEachDoor(key, doors)).toBe(result);
  });
});
