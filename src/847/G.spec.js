const { getCountOfRooms } = require('./G');

describe('847G. University Classes', () => {
  it.each`
    n    | shedule                              | result
    ${1} | ${['0101010', '1010101']}            | ${1}
    ${2} | ${['0101011', '0011001', '0110111']} | ${3}
  `('Base test: $n', ({ shedule, result }) => {
    expect(getCountOfRooms(shedule)).toBe(result);
  });
});
