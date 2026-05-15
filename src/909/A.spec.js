const { buildLogin } = require('./A');

describe('909A. Generate Login', () => {
  it.each`
    n    | name              | result
    ${1} | ${'harry potter'} | ${'hap'}
    ${2} | ${'tom riddle'}   | ${'tomr'}
  `('Base test: $n', ({ name, result }) => {
    expect(buildLogin(name)).toBe(result);
  });
});
