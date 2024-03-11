const { getCountOfEqualSymbols } = require('./A');

describe('1790A. Polycarp and the Day of Pi', () => {
  it.each`
    n    | memory                              | result
    ${1} | ${'000'}                            | ${0}
    ${2} | ${'3'}                              | ${1}
    ${3} | ${'4141592653'}                     | ${0}
    ${4} | ${'141592653589793238462643383279'} | ${0}
    ${5} | ${'31420'}                          | ${3}
    ${6} | ${'31415'}                          | ${5}
    ${7} | ${'314159265358'}                   | ${12}
    ${8} | ${'27182'}                          | ${0}
    ${9} | ${'314159265358979323846264338327'} | ${30}
  `('Base test: $n', ({ memory, result }) => {
    expect(getCountOfEqualSymbols(memory)).toBe(result);
  });
});
