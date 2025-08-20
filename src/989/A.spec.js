const { couldBeColored } = require('./A');

describe('989A. A Blend of Springtime', () => {
  it.each`
    n    | map         | result
    ${1} | ${'.BAC.'}  | ${'YES'}
    ${2} | ${'AA..CB'} | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(couldBeColored(map)).toBe(result);
  });
});
