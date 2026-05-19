/* eslint-disable no-undefined */
module.exports = {
  dropWhile: (arr, iteratee) => {
    let comporator;
    let temp = iteratee;
    if (typeof temp === 'string' || typeof temp === 'number') {
      temp = { [iteratee]: undefined };
    } else if (Array.isArray(temp)) {
      temp = {};
      for (let j = 0; j < iteratee.length; j += 2) {
        temp[iteratee[j]] = iteratee[j + 1];
      }
    }
    if (typeof temp === 'object') {
      const entries = Object.entries(temp);
      comporator = (item) =>
        entries.every((ent) =>
          ent[1] !== undefined
            ? item[ent[0]] === ent[1]
            : Object.hasOwn(item, ent[0])
        );
    } else {
      comporator = iteratee;
    }
    const index = arr.findIndex((item) => !comporator(item));
    return index === -1 ? arr : arr.slice(index);
  },
};
