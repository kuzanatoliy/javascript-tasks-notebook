function gcd(a, b) {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

module.exports = {
  isItPossibleToMakeAllFriendsHappy: (m, mm, men, women) => {
    const x = gcd(m, mm);
    const happy = [];
    for (let j = 0; j < x; j++) {
      happy.push(-1);
    }
    const newMen = men.slice(1);
    const newWomen = women.slice(1);
    for (let j = 0; j < newMen.length; j++) {
      happy[newMen[j] % x] = 1;
    }
    for (let j = 0; j < newWomen.length; j++) {
      happy[newWomen[j] % x] = 1;
    }
    for (let j = 0; j < happy.length; j++) {
      if (happy[j] === -1) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
