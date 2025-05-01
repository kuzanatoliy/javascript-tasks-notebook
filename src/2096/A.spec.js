const { getOrder } = require('./A');

describe('2096A. Wonderful Sticks', () => {
  it.each`
    n    | map         | result
    ${1} | ${'<'}      | ${[2, 1]}
    ${2} | ${'<<><'}   | ${[4, 3, 2, 5, 1]}
    ${3} | ${'>'}      | ${[1, 2]}
    ${4} | ${'<>'}     | ${[2, 1, 3]}
    ${5} | ${'><>>><'} | ${[3, 4, 2, 5, 6, 7, 1]}
  `('Base test: $n', ({ map, result }) => {
    expect(getOrder(map)).toStrictEqual(result);
  });
});
