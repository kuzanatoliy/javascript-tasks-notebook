const { getPokemon } = require('./A');

describe('452A. Eevee', () => {
  it.each`
    n    | map          | result
    ${1} | ${'j......'} | ${'jolteon'}
    ${2} | ${'...feon'} | ${'leafeon'}
    ${3} | ${'.l.r.o.'} | ${'flareon'}
    ${4} | ${'......'}  | ${'espeon'}
  `('Base test: $n', ({ map, result }) => {
    expect(getPokemon(map)).toStrictEqual(result);
  });
});
