const { getCountOfGoodNumbers } = require('./A');

describe('1278A. Happy Birthday, Polycarp!', () => {
  it.each`
    n    | snum            | result
    ${1} | ${'18'}         | ${10}
    ${2} | ${'1'}          | ${1}
    ${3} | ${'9'}          | ${9}
    ${4} | ${'100500'}     | ${45}
    ${5} | ${'33'}         | ${12}
    ${6} | ${'1000000000'} | ${81}
    ${7} | ${'120'}        | ${19}
  `('Base test: $n', ({ snum, pass, result }) => {
    expect(getCountOfGoodNumbers(snum, pass)).toBe(result);
  });
});
