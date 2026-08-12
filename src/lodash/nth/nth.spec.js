/* eslint-disable no-undefined */
const { nth } = require('./nth');

describe('Lodash: nth function', () => {
  it.each`
    n    | arr                     | num          | result
    ${1} | ${['a', 'b', 'c', 'd']} | ${1}         | ${'b'}
    ${2} | ${['a', 'b', 'c', 'd']} | ${-2}        | ${'c'}
    ${3} | ${['a', 'b', 'c', 'd']} | ${10}        | ${undefined}
    ${4} | ${['a', 'b', 'c', 'd']} | ${-10}       | ${undefined}
    ${5} | ${['a', 'b', 'c', 'd']} | ${undefined} | ${'a'}
  `('Base test: $n', ({ arr, num, result }) => {
    expect(nth(arr, num)).toBe(result);
  });
});
