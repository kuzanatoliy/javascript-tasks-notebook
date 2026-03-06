const { findIndex } = require('./find-index');

const USERS = [
  { active: false, user: 'barney' },
  { active: false, user: 'fred' },
  { active: true, user: 'pebbles' },
];

const FUNCTION_CONDITION = function (o) {
  return o.user === 'barney';
};

describe('Lodash: findIndex function', () => {
  it.each`
    n    | arr      | condition                          | result
    ${1} | ${USERS} | ${FUNCTION_CONDITION}              | ${0}
    ${2} | ${USERS} | ${{ active: false, user: 'fred' }} | ${1}
    ${3} | ${USERS} | ${['active', false]}               | ${0}
    ${3} | ${USERS} | ${'active'}                        | ${0}
  `('Base test: $n', ({ arr, condition, result }) => {
    expect(findIndex(arr, condition)).toBe(result);
  });
});
