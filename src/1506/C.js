module.exports = {
  getCountOfRemoves: (str1, str2) => {
    let mStr = str1;
    let lStr = str2;

    if (mStr.length > lStr.length) {
      mStr = str2;
      lStr = str1;
    }

    for (let j = 0; j < mStr.length; j++) {
      for (let jj = 0; jj <= j; jj++) {
        const subStr = mStr.slice(jj, jj + mStr.length - j);
        if (lStr.includes(subStr)) {
          return mStr.length + lStr.length - 2 * subStr.length;
        }
      }
    }

    return str1.length + str2.length;
  },
};
