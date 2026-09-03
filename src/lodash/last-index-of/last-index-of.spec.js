/* eslint-disable no-undefined */
const { lastIndexOf } = require('./last-index-of');

describe('Lodash: lastIndexOf function', () => {
  it.each`
    n    | arr             | value | start        | result
    ${1} | ${[1, 2, 1, 2]} | ${2}  | ${undefined} | ${3}
    ${2} | ${[1, 2, 1, 2]} | ${2}  | ${2}         | ${1}
    ${3} | ${[1, 2, 1, 2]} | ${10} | ${undefined} | ${-1}
  `('Base test: $n', ({ arr, value, start, result }) => {
    expect(lastIndexOf(arr, value, start)).toStrictEqual(result);
  });
});
