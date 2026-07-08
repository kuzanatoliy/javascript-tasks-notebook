/* eslint-disable no-undefined */
const { indexOf } = require('./index-of');

describe('Lodash: indexOf function', () => {
  it.each`
    n    | arr             | value | fromIndex    | result
    ${1} | ${[1, 2, 1, 2]} | ${2}  | ${undefined} | ${1}
    ${2} | ${[1, 2, 1, 2]} | ${2}  | ${2}         | ${3}
    ${3} | ${[1, 2, 1, 2]} | ${2}  | ${5}         | ${-1}
  `('Base test: $n', ({ arr, value, fromIndex, result }) => {
    expect(indexOf(arr, value, fromIndex)).toBe(result);
  });
});
