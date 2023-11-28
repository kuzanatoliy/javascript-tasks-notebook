module.exports = {
  checkBitPlusPlusValue: (operations) => {
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
      count += operations[i][0] === '+' || operations[i][2] === '+' ? 1 : -1;
    }
    return count;
  },
};
