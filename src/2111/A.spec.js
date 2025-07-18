const { getCountOfSteps } = require('./A');

describe('2111A. Energy Crystals', () => {
  it.each`
    n    | num           | result
    ${1} | ${1}          | ${3}
    ${2} | ${5}          | ${7}
    ${3} | ${14}         | ${9}
    ${4} | ${2025}       | ${23}
    ${5} | ${31415}      | ${31}
    ${6} | ${536870910}  | ${59}
    ${7} | ${1000000000} | ${61}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfSteps(num)).toBe(result);
  });
});
