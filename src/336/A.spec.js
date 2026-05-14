const { getCoordinates } = require('./A');

describe('336A. Vasily the Bear and Triangle', () => {
  it.each`
    n    | x      | y    | result
    ${1} | ${10}  | ${5} | ${[0, 15, 15, 0]}
    ${2} | ${-10} | ${5} | ${[-15, 0, 0, 15]}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCoordinates(x, y)).toStrictEqual(result);
  });
});
