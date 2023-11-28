const { checkCountOfDamagedDragons } = require('./A');

describe('148A. Insomnia cure', () => {
  it.each`
    n    | dragons             | result
    ${1} | ${[1, 2, 3, 4, 12]} | ${12}
    ${2} | ${[2, 3, 4, 5, 24]} | ${17}
  `('Base test: $n', ({ dragons, result }) => {
    expect(checkCountOfDamagedDragons(dragons)).toBe(result);
  });
});
