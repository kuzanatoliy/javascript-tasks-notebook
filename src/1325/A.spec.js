const { getPair } = require('./A');

describe('1325A. EhAb AnD gCd', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${[1, 1]}
    ${2} | ${14}  | ${[13, 1]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPair(number)).toStrictEqual(result);
  });
});
