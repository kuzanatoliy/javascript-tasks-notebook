const { isReaded } = require('./A');

describe('1863A. Channel', () => {
  it.each`
    n    | count | init | map          | result
    ${1} | ${5}  | ${5} | ${'--+'}     | ${'YES'}
    ${2} | ${5}  | ${2} | ${'++-'}     | ${'NO'}
    ${3} | ${5}  | ${4} | ${'-+'}      | ${'MAYBE'}
    ${4} | ${5}  | ${0} | ${'++++-++'} | ${'YES'}
  `('Base test: $n', ({ count, init, map, result }) => {
    expect(isReaded(count, init, map)).toStrictEqual(result);
  });
});
