const buildObjectCondition = (obj) => {
  const entries = Object.entries(obj);
  return (item) => {
    for (let j = 0; j < entries.length; j++) {
      if (item[entries[j][0]] !== entries[j][1]) {
        return false;
      }
    }
    return true;
  };
};

const buildArrayCondigtion = (arr) => (item) => item[arr[0]] === arr[1];

const buildKeyCondition = (key) => (item) => Object.hasOwn(item, key);

module.exports = {
  findIndex: (arr, condition) => {
    if (typeof condition === 'function') {
      return arr.findIndex(condition);
    }
    if (Array.isArray(condition)) {
      return arr.findIndex(buildArrayCondigtion(condition));
    }
    if (typeof condition === 'object') {
      return arr.findIndex(buildObjectCondition(condition));
    }
    return arr.findIndex(buildKeyCondition(condition));
  },
};
