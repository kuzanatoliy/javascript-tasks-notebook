const { isItPossibleToSplit } = require('./B');

describe('1984B. Large Addition', () => {
  it.each`
    n     | arr                    | result
    ${1}  | ${'1337'}              | ${'YES'}
    ${2}  | ${'200'}               | ${'NO'}
    ${3}  | ${'1393938'}           | ${'YES'}
    ${4}  | ${'1434'}              | ${'YES'}
    ${5}  | ${'98765432123456789'} | ${'NO'}
    ${6}  | ${'11111111111111111'} | ${'YES'}
    ${7}  | ${'420'}               | ${'NO'}
    ${8}  | ${'1984'}              | ${'YES'}
    ${9}  | ${'10'}                | ${'YES'}
    ${10} | ${'69'}                | ${'NO'}
    ${11} | ${'119'}               | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSplit(arr)).toStrictEqual(result);
  });
});
