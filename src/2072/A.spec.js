const { getCountOfChanges } = require('./A');

describe('2072A. New World, New Me, New Array', () => {
  it.each`
    n    | num   | k       | p     | result
    ${1} | ${21} | ${100}  | ${10} | ${10}
    ${2} | ${9}  | ${-420} | ${42} | ${-1}
    ${3} | ${5}  | ${-7}   | ${2}  | ${4}
    ${4} | ${13} | ${37}   | ${7}  | ${6}
    ${5} | ${10} | ${0}    | ${49} | ${0}
    ${6} | ${1}  | ${10}   | ${9}  | ${-1}
    ${7} | ${7}  | ${-7}   | ${7}  | ${1}
    ${8} | ${20} | ${31}   | ${1}  | ${-1}
  `('Base test: $n', ({ num, k, p, result }) => {
    expect(getCountOfChanges(num, k, p)).toBe(result);
  });
});
