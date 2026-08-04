/* eslint-disable no-undefined */
const { join } = require('./join');

describe('Lodash: join function', () => {
  it.each`
    n    | arr                | separator | result
    ${1} | ${['a', 'b', 'c']} | ${'~'}    | ${'a~b~c'}
  `('Base test: $n', ({ arr, separator, result }) => {
    expect(join(arr, separator)).toBe(result);
  });
});
