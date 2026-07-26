const { multyFilter } = require('./multy-filter');

describe('multyFilter', () => {
  it.each`
    n    | arr                | fArr      | result
    ${1} | ${[0, 2, 2, 2, 4]} | ${[2]}    | ${[0, 4]}
    ${2} | ${[1, 2, 2]}       | ${[1]}    | ${[2, 2]}
    ${3} | ${[0, 2, 3]}       | ${[1, 2]} | ${[0, 3]}
  `('Base test: $n', ({ arr, fArr, result }) => {
    expect(multyFilter(arr, fArr)).toStrictEqual(result);
  });
});
