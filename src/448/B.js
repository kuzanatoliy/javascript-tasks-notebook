module.exports = {
  getTransformationType: (str1, str2) => {
    let automaton = false;
    let needTree = false;
    let array = false;
    const arrS = new Array(26).fill(0);
    const arrT = new Array(26).fill(0);

    str1.split('').forEach((char) => {
      arrS[char.charCodeAt(0) - 97] += 1;
    });

    str2.split('').forEach((char) => {
      arrT[char.charCodeAt(0) - 97] += 1;
    });

    for (let i = 0; i < 26; i++) {
      if (arrT[i] > arrS[i]) {
        needTree = true;
      } else if (arrT[i] < arrS[i]) {
        automaton = true;
      }
    }

    if (needTree) {
      return 'need tree';
    } else {
      let indexFound = 0;
      let match = -1;

      for (let i = 0; i < str2.length; i++) {
        indexFound = str1.indexOf(str2.charAt(i), match + 1);
        if (indexFound > match) {
          match = indexFound;
        } else {
          array = true;
          break;
        }
      }

      if (automaton && array) {
        return 'both';
      } else if (automaton) {
        return 'automaton';
      } else {
        return 'array';
      }
    }
  },
};
