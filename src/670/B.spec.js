const { getRobotId } = require('./B');

describe('670B. Game of Robots', () => {
  it.each`
    n    | ids               | k    | result
    ${1} | ${[1, 2]}         | ${2} | ${1}
    ${2} | ${[10, 4, 18, 3]} | ${5} | ${4}
  `('Base test: $n', ({ ids, k, result }) => {
    expect(getRobotId(ids, k)).toStrictEqual(result);
  });
});
