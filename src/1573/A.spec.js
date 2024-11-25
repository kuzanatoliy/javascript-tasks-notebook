const { getCountOfOperations } = require('./A');

describe('1573A. Countdown', () => {
  it.each`
    n    | map                                 | result
    ${1} | ${'007'}                            | ${7}
    ${2} | ${'1000'}                           | ${2}
    ${3} | ${'00000'}                          | ${0}
    ${4} | ${'103'}                            | ${5}
    ${5} | ${'2020'}                           | ${6}
    ${6} | ${'123456789'}                      | ${53}
    ${7} | ${'001678294039710047203946100020'} | ${115}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfOperations(map)).toStrictEqual(result);
  });
});
