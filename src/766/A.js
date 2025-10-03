module.exports = {
  getLongestUncommonSubString: (strA, strB) =>
    strA === strB ? -1 : Math.max(strA.length, strB.length),
};
