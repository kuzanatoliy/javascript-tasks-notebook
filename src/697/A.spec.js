const { isItBarking } = require('./A');

describe('697A. Pineapple Incident', () => {
  it.each`
    n    | t          | s     | x     | result
    ${1} | ${3}       | ${10} | ${4}  | ${'NO'}
    ${2} | ${3}       | ${10} | ${3}  | ${'YES'}
    ${3} | ${3}       | ${8}  | ${51} | ${'YES'}
    ${4} | ${3}       | ${8}  | ${52} | ${'YES'}
    ${5} | ${9295078} | ${5}  | ${6}  | ${'NO'}
  `('Base test: $n', ({ t, s, x, result }) => {
    expect(isItBarking(t, s, x)).toBe(result);
  });
});
