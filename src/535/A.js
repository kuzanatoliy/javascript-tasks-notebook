const NUMS1 = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const NUMS2 = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const NUMS3 = [
  '-',
  '-',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

module.exports = {
  turnNumber: (num) => {
    if (num === 0) {
      return NUMS1[0];
    }
    const snum = num.toString();
    if (num > 9 && num < 20) {
      return NUMS2[snum[1]];
    }
    const res = [];
    if (num > 19) {
      res.push(NUMS3[snum[0]]);
    }
    const ind = num > 9 ? 1 : 0;
    if (snum[ind] !== '0') {
      res.push(NUMS1[snum[ind]]);
    }
    return res.join('-');
  },
};
