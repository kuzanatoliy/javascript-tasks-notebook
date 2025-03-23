const { getCountOfStones } = require('./A');

describe('1059A. A pile of stones', () => {
  it.each`
    n    | map        | result
    ${1} | ${'---'}   | ${0}
    ${2} | ${'++++'}  | ${4}
    ${3} | ${'-+'}    | ${1}
    ${4} | ${'++-++'} | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfStones(map)).toStrictEqual(result);
  });
});
