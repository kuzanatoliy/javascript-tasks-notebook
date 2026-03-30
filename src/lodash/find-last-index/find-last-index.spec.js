const { findLastIndex } = require('./find-last-index');

const USERS = [
  { active: true, user: 'barney' },
  { active: false, user: 'fred' },
  { active: false, user: 'pebbles' },
];

const FUNCTION_CONDITION = function (o) {
  return o.user === 'pebbles';
};

describe('Lodash: findLastIndex function', () => {
  it.each`
    n    | arr      | condition                           | result
    ${1} | ${USERS} | ${FUNCTION_CONDITION}               | ${2}
    ${2} | ${USERS} | ${{ active: true, user: 'barney' }} | ${0}
    ${3} | ${USERS} | ${['active', false]}                | ${2}
    ${3} | ${USERS} | ${'active'}                         | ${2}
  `('Base test: $n', ({ arr, condition, result }) => {
    expect(findLastIndex(arr, condition)).toStrictEqual(result);
  });
});
