/* eslint-disable no-undefined */
const { dropWhile } = require('./drop-while');

const USERS = [
  { active: false, user: 'barney' },
  { active: false, user: 'fred' },
  { active: true, user: 'pebbles' },
];

describe('Lodash: drop function', () => {
  it.each`
    n    | arr      | iteratee                | result
    ${1} | ${USERS} | ${(val) => !val.active} | ${[USERS[2]]}
    ${2} | ${USERS} | ${['active', false]}    | ${[USERS[2]]}
    ${3} | ${USERS} | ${'active'}             | ${USERS}
  `('Base test: $n', ({ arr, iteratee, result }) => {
    expect(dropWhile(arr, iteratee)).toStrictEqual(result);
  });
});
