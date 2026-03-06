/* eslint-disable no-undefined */
const { fill } = require('./fill');

describe('Lodash: fill function', () => {
  it.each`
    n    | arr              | value  | start        | end          | result
    ${1} | ${[1, 2, 3]}     | ${'a'} | ${undefined} | ${undefined} | ${['a', 'a', 'a']}
    ${2} | ${new Array(3)}  | ${2}   | ${undefined} | ${undefined} | ${[2, 2, 2]}
    ${3} | ${[4, 6, 8, 10]} | ${'*'} | ${1}         | ${3}         | ${[4, '*', '*', 10]}
  `('Base test: $n', ({ arr, value, start, end, result }) => {
    expect(fill(arr, value, start, end)).toStrictEqual(result);
  });
});
