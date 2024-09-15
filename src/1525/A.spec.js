const { getCountOfSteps } = require('./A');

describe('1525A. Potion-making', () => {
  it.each`
    n    | num    | result
    ${1} | ${3}   | ${100}
    ${2} | ${100} | ${1}
    ${3} | ${25}  | ${4}
    ${4} | ${36}  | ${25}
    ${5} | ${78}  | ${50}
    ${6} | ${56}  | ${25}
    ${7} | ${15}  | ${20}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfSteps(num)).toBe(result);
  });
});
