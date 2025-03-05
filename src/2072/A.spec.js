const { getCountOfChanges } = require('./A');

describe('2072A. New World, New Me, New Array', () => {
  it.each`
    n    | num   | k       | p     | result
    ${1} | ${21} | ${100}  | ${10} | ${10}
    ${1} | ${9}  | ${-420} | ${42} | ${-1}
    ${2} | ${5}  | ${-7}   | ${2}  | ${4}
    ${3} | ${13} | ${37}   | ${7}  | ${6}
    ${4} | ${10} | ${0}    | ${49} | ${0}
    ${5} | ${1}  | ${10}   | ${9}  | ${-1}
    ${6} | ${7}  | ${-7}   | ${7}  | ${1}
    ${7} | ${20} | ${31}   | ${1}  | ${-1}
  `('Base test: $n', ({ num, k, p, result }) => {
    expect(getCountOfChanges(num, k, p)).toBe(result);
  });
});
