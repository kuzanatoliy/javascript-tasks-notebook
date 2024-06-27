const { getY } = require('./A');

describe('1968A. Maximize?', () => {
  it.each`
    n    | number  | result
    ${1} | ${10}   | ${9}
    ${2} | ${7}    | ${6}
    ${3} | ${21}   | ${20}
    ${4} | ${100}  | ${99}
    ${5} | ${2}    | ${1}
    ${6} | ${1000} | ${999}
    ${7} | ${6}    | ${5}
  `('Base test: $n', ({ number, result }) => {
    expect(getY(number)).toBe(result);
  });
});
