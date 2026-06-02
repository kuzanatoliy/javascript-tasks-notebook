/* eslint-disable no-undefined */
const { dropRightWhile } = require('./drop-right-while');

const USERS = [
  { active: true, user: 'barney' },
  { active: false, user: 'fred' },
  { active: false, user: 'pebbles' },
];

describe('Lodash: drop function', () => {
  it.each`
    n    | arr      | iteratee                | result
    ${1} | ${USERS} | ${(val) => !val.active} | ${[USERS[0]]}
    ${2} | ${USERS} | ${['active', false]}    | ${[USERS[0]]}
    ${3} | ${USERS} | ${'active'}             | ${USERS}
  `('Base test: $n', ({ arr, iteratee, result }) => {
    expect(dropRightWhile(arr, iteratee)).toStrictEqual(result);
  });
});
