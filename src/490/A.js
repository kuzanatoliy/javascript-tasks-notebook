module.exports = {
  getTeams: (members) => {
    const hash = [null, [], [], []];
    const res = [];

    for (let i = 0; i < members.length; i++) {
      hash[members[i]].push(i);
    }

    const count = Math.min(hash[1].length, hash[2].length, hash[3].length);

    for (let i = 0; i < count; i++) {
      res.push([hash[1][i] + 1, hash[2][i] + 1, hash[3][i] + 1]);
    }

    return [count, res];
  },
};
