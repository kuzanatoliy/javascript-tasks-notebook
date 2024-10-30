const { getMinCost } = require('./B');

describe('1837B. Comparison String', () => {
  it.each`
    n    | map          | result
    ${1} | ${'<<>>'}    | ${3}
    ${2} | ${'>><<'}    | ${3}
    ${3} | ${'>>>>>'}   | ${6}
    ${4} | ${'<><><><'} | ${2}
    ${5} | ${'>><>><>'} | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getMinCost(map)).toStrictEqual(result);
  });
});
