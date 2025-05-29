const { transformString } = require('./A');

describe('1860A. Not a Substring', () => {
  it.each`
    n    | array     | result
    ${1} | ${')('}   | ${['YES', '(())']}
    ${2} | ${'(()'}  | ${['YES', '()()()']}
    ${3} | ${'()'}   | ${['NO']}
    ${4} | ${'))()'} | ${['YES', '()()()()']}
  `('Base test: $n', ({ array, result }) => {
    expect(transformString(array)).toStrictEqual(result);
  });
});
