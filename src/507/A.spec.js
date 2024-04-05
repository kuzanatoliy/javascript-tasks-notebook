const { getMaxNumberOfInstruments } = require('./A');

describe('492A. Vanya and Cubes', () => {
  it.each`
    n    | count | array              | result
    ${1} | ${10} | ${[4, 3, 1, 2]}    | ${[3, 4, 2, 1]}
    ${2} | ${6}  | ${[4, 3, 1, 1, 2]} | ${[3, 4, 5]}
    ${3} | ${3}  | ${[4]}             | ${[]}
  `('Base test: $n', ({ count, array, result }) => {
    expect(getMaxNumberOfInstruments(count, array)).toStrictEqual(result);
  });
});
