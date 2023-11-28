module.exports = {
  checkFriendsPresents: (friends) => {
    const result = [];
    for (let i = 0; i < friends.length; i++) {
      result[friends[i] - 1] = i + 1;
    }
    return result;
  },
};
