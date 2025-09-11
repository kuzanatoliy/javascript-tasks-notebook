module.exports = {
  isAtHome: (home, travels) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < travels.length; j++) {
      const temp = travels[j].split('->');
      c1 += temp[0] === home;
      c2 += temp[1] === home;
    }
    return c1 === c2 ? 'home' : 'contest';
  },
};
