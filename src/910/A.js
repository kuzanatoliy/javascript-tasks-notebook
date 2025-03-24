module.exports = {
  getCountOfJumps: (map, k) => {
    let curr = 0;
    let jumps = 0;
    while (curr < map.length - 1) {
      let next = curr + k;
      while (next > curr && map[next] !== '1') {
        next--;
      }
      if (curr === next) {
        return -1;
      }
      jumps++;
      curr = next;
    }
    return jumps;
  },
};
