module.exports = {
  getLength: (students) => {
    let max = 1;
    let map = new Map();
    for (var j = 0; j < students.length; j++) {
      if (!map.has(students[j])) {
        map.set(students[j], 1);
      } else {
        var c = map.get(students[j]) + 1;
        if (max < c) {
          max = c;
        }
        map.set(students[j], c);
      }
    }
    return map.size > max ? max : map.size === max ? max - 1 : map.size;
  },
};
