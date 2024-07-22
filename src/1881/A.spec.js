const { getMinCountOfOperations } = require('./A');

describe("1881A. Don't Try to Count", () => {
  it.each`
    n     | string1           | string2                  | result
    ${1}  | ${'a'}            | ${'aaaaa'}               | ${3}
    ${2}  | ${'eforc'}        | ${'force'}               | ${1}
    ${3}  | ${'ab'}           | ${'ababa'}               | ${2}
    ${4}  | ${'aba'}          | ${'ababa'}               | ${-1}
    ${5}  | ${'babb'}         | ${'bbb'}                 | ${1}
    ${6}  | ${'aaaaa'}        | ${'a'}                   | ${0}
    ${7}  | ${'aabb'}         | ${'ba'}                  | ${1}
    ${8}  | ${'bk'}           | ${'kbkbkbkb'}            | ${3}
    ${9}  | ${'fjdgmujlcont'} | ${'tf'}                  | ${1}
    ${10} | ${'aa'}           | ${'aa'}                  | ${0}
    ${11} | ${'abb'}          | ${'babba'}               | ${2}
    ${12} | ${'m'}            | ${'mmmmmmmmmmmmmmmmmmm'} | ${5}
  `('Base test: $n', ({ string1, string2, result }) => {
    expect(getMinCountOfOperations(string1, string2)).toBe(result);
  });
});
