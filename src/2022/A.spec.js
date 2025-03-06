const { getCountOfHappyPeople } = require('./A');

describe('2022A. Bus to Pénjamo', () => {
  it.each`
    n    | arr             | r    | result
    ${1} | ${[2, 3, 1]}    | ${3} | ${4}
    ${2} | ${[2, 2, 2]}    | ${3} | ${6}
    ${3} | ${[1, 1, 2, 2]} | ${5} | ${6}
    ${4} | ${[3, 1, 1, 3]} | ${5} | ${6}
  `('Base test: $n', ({ arr, r, result }) => {
    expect(getCountOfHappyPeople(arr, r)).toBe(result);
  });
});
