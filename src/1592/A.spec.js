const { getCountOfOperations } = require('./A');

describe('1592A. Gamer Hemose', () => {
  it.each`
    n    | health | guns         | result
    ${1} | ${4}   | ${[3, 7]}    | ${1}
    ${2} | ${6}   | ${[4, 2]}    | ${2}
    ${3} | ${11}  | ${[2, 1, 7]} | ${3}
  `('Base test: $n', ({ health, guns, result }) => {
    expect(getCountOfOperations(health, guns)).toStrictEqual(result);
  });
});
