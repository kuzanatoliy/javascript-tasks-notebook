const { pull } = require('./pull');

describe('Lodash: pull function', () => {
  it.each`
    n    | arr                               | values        | result
    ${1} | ${['a', 'b', 'c', 'a', 'b', 'c']} | ${['a', 'c']} | ${['b', 'b']}
    ${2} | ${['a', 'b', 'c', 'a', 'b', 'c']} | ${['a']}      | ${['b', 'c', 'b', 'c']}
    ${3} | ${['a', 'b', 'c', 'a', 'b', 'c']} | ${['e']}      | ${['a', 'b', 'c', 'a', 'b', 'c']}
  `('Base test: $n', ({ arr, values, result }) => {
    expect(pull(arr, ...values)).toStrictEqual(result);
  });
});
