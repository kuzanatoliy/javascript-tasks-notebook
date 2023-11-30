module.exports = {
  getRestoringThreeNumbers: (...numbers) => {
    const num = numbers.sort((a, b) => b - a);
    return [num[0] - num[1], num[0] - num[2], num[0] - num[3]];
  },
};
