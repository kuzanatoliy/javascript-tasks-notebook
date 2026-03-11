const { getMaxCountOfRooms } = require('./B');

describe('1244B. Rooms and Staircases', () => {
  it.each`
    n    | map           | result
    ${1} | ${'00100'}    | ${6}
    ${2} | ${'00000000'} | ${8}
    ${3} | ${'11111'}    | ${10}
    ${4} | ${'110'}      | ${6}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getMaxCountOfRooms(map, k)).toBe(result);
  });
});
