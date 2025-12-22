const { isBlackCell } = require('./B');

describe('2157B. Expansion Plan 2', () => {
  it.each`
    n    | map             | x     | y     | result
    ${1} | ${'888'}        | ${3}  | ${3}  | ${'YES'}
    ${2} | ${'4884'}       | ${5}  | ${1}  | ${'NO'}
    ${3} | ${'4884'}       | ${3}  | ${-3} | ${'YES'}
    ${4} | ${'4884884'}    | ${-7} | ${-5} | ${'NO'}
    ${5} | ${'4884884888'} | ${3}  | ${-3} | ${'YES'}
    ${6} | ${'4'}          | ${-7} | ${-5} | ${'NO'}
  `('Base test: $n', ({ map, x, y, result }) => {
    expect(isBlackCell(map, x, y)).toBe(result);
  });
});
