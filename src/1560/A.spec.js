const { getNumber } = require('./A');

describe('1560A. Dislike of Threes', () => {
  it.each`
    n     | number  | result
    ${1}  | ${1}    | ${1}
    ${2}  | ${2}    | ${2}
    ${3}  | ${3}    | ${4}
    ${4}  | ${4}    | ${5}
    ${5}  | ${5}    | ${7}
    ${6}  | ${6}    | ${8}
    ${7}  | ${7}    | ${10}
    ${8}  | ${8}    | ${11}
    ${9}  | ${9}    | ${14}
    ${10} | ${1000} | ${1666}
  `('Base test: $n', ({ number, result }) => {
    expect(getNumber(number)).toBe(result);
  });
});
