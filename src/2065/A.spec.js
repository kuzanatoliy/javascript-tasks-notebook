const { transformString } = require('./A');

describe("2065A. Skibidus and Amog'u", () => {
  it.each`
    n    | str           | result
    ${1} | ${'us'}       | ${'i'}
    ${2} | ${'sus'}      | ${'si'}
    ${3} | ${'fungus'}   | ${'fungi'}
    ${4} | ${'cactus'}   | ${'cacti'}
    ${5} | ${'sussus'}   | ${'sussi'}
    ${6} | ${'amogus'}   | ${'amogi'}
    ${7} | ${'chungus'}  | ${'chungi'}
    ${8} | ${'ntarsus'}  | ${'ntarsi'}
    ${9} | ${'skibidus'} | ${'skibidi'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
