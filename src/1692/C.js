/* eslint-disable consistent-return */
module.exports = {
  getPosition: (strings) => {
    for (let j = 0; j < strings.length; j++) {
      if (strings[j].includes('#.#')) {
        return [j + 2, strings[j + 1].indexOf('#') + 1];
      }
    }
  },
};
