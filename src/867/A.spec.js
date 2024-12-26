const { isMoreFlyes } = require('./A');

describe('867A. Between the Offices', () => {
  it.each`
    n    | str             | result
    ${1} | ${'FSSF'}       | ${'NO'}
    ${2} | ${'SF'}         | ${'YES'}
    ${3} | ${'FFFFFFFFFF'} | ${'NO'}
    ${4} | ${'SSFFSFFSFF'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isMoreFlyes(str)).toStrictEqual(result);
  });
});
