const { isItPossibleToSplit } = require('./D');

describe('1829C. Mr. Perfectly Fine', () => {
  it.each`
    n     | num       | target     | result
    ${1}  | ${6}      | ${4}       | ${'YES'}
    ${2}  | ${9}      | ${4}       | ${'YES'}
    ${3}  | ${4}      | ${2}       | ${'NO'}
    ${4}  | ${18}     | ${27}      | ${'NO'}
    ${5}  | ${27}     | ${4}       | ${'YES'}
    ${6}  | ${27}     | ${2}       | ${'YES'}
    ${7}  | ${27}     | ${10}      | ${'NO'}
    ${8}  | ${1}      | ${1}       | ${'YES'}
    ${9}  | ${3}      | ${1}       | ${'YES'}
    ${10} | ${5}      | ${1}       | ${'NO'}
    ${11} | ${746001} | ${2984004} | ${'NO'}
  `('Base test: $n', ({ num, target, result }) => {
    expect(isItPossibleToSplit(num, target)).toBe(result);
  });
});
