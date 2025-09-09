const { getPosition } = require('./A');

describe('376A. Lever', () => {
  it.each`
    n    | map           | result
    ${1} | ${'=^=='}     | ${'balance'}
    ${2} | ${'9===^==1'} | ${'left'}
    ${3} | ${'2==^7=='}  | ${'right'}
    ${4} | ${'41^52=='}  | ${'balance'}
  `('Base test: $n', ({ map, result }) => {
    expect(getPosition(map)).toBe(result);
  });
});
