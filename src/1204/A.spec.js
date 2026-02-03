const { getCountOfMissedTrains } = require('./A');

describe('1204A. BowWow and the Timetable', () => {
  it.each`
    n    | map            | result
    ${1} | ${'100000000'} | ${4}
    ${2} | ${'101'}       | ${2}
    ${3} | ${'10100'}     | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfMissedTrains(map)).toStrictEqual(result);
  });
});
