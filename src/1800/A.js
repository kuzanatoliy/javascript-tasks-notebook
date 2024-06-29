/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
module.exports = {
  isMeowing: (string) =>
    string
      .toLowerCase()
      .replace(/(m|M)+/, 'm')
      .replace(/(e|E)+/, 'e')
      .replace(/(w|W)+/, 'w') === 'meow'
      ? 'YES'
      : 'NO',
};
