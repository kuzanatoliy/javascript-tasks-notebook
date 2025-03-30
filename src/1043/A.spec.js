const { getCountOfVoices } = require('./A');

describe('1043A. Elections', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1, 1, 5, 1]} | ${5}
    ${2} | ${[2, 2, 3, 2, 2]} | ${5}
    ${3} | ${[100]}           | ${201}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfVoices(arr)).toBe(result);
  });
});
