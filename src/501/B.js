/* eslint-disable prefer-destructuring */
module.exports = {
  transforNames: (requests) => {
    const map = new Map();
    for (let j = 0; j < requests.length; j++) {
      if (map.has(requests[j][0])) {
        const temp = map.get(requests[j][0]);
        map.delete(requests[j][0]);
        temp.new = requests[j][1];
        map.set(requests[j][1], temp);
      } else {
        map.set(requests[j][1], { new: requests[j][1], old: requests[j][0] });
      }
    }
    return Array.from(map.values()).map((item) => [item.old, item.new]);
  },
};
