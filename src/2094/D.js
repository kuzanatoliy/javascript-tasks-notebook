module.exports = {
  isSameStrings: (str1, str2) => {
    const temp1 = [];
    let curr1 = 1;
    for (let j = 1; j < str1.length; j++) {
      if (str1[j - 1] === str1[j]) {
        curr1++;
      } else {
        temp1.push({ key: str1[j - 1], val: curr1 });
        curr1 = 1;
      }
    }
    temp1.push({ key: str1[str1.length - 1], val: curr1 });
    const temp2 = [];
    let curr2 = 1;
    for (let jj = 1; jj < str2.length; jj++) {
      if (str2[jj - 1] === str2[jj]) {
        curr2++;
      } else {
        temp2.push({ key: str2[jj - 1], val: curr2 });
        curr2 = 1;
      }
    }
    temp2.push({ key: str2[str2.length - 1], val: curr2 });
    if (temp1.length !== temp2.length) {
      return 'NO';
    }
    for (let jjj = 0; jjj < temp1.length; jjj++) {
      if (
        temp1[jjj].key !== temp2[jjj].key ||
        temp1[jjj].val * 2 < temp2[jjj].val ||
        temp1[jjj].val > temp2[jjj].val
      ) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
