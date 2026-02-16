const { getCountOfSteps } = require('./B');

describe('2154A. Notelock', () => {
  it.each`
    n    | machines    | queries           | result
    ${1} | ${'BA'}     | ${[3, 4]}         | ${[2, 3]}
    ${2} | ${'B'}      | ${[20]}           | ${[5]}
    ${3} | ${'BAABBA'} | ${[2, 8, 32, 95]} | ${[2, 5, 8, 11]}
  `('Base test: $n', ({ machines, queries, result }) => {
    expect(getCountOfSteps(machines, queries)).toStrictEqual(result);
  });
});
