const { transformString } = require('./A');

describe('118A. String Task', () => {
  it.each`
    n    | str             | result
    ${1} | ${'tour'}       | ${'.t.r'}
    ${2} | ${'Codeforces'} | ${'.c.d.f.r.c.s'}
    ${3} | ${'aBAcAba'}    | ${'.b.c.b'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toStrictEqual(result);
  });
});
