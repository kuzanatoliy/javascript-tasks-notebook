module.exports = {
  checkIfDialogMayCorrespond: (string) => {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'Q') {
        count++;
      }
      if (string[j] === 'A' && count) {
        count--;
      }
    }
    return count !== 0 ? 'No' : 'Yes';
  },
};
