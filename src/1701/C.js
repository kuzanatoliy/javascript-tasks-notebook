function caclTime(m, arrMapper) {
  let sumNeed = 0;
  let indexNeed = arrMapper.length - 1;
  for (let i = arrMapper.length - 1; i >= 0; i--) {
    const check = parseInt((m - arrMapper[i]) / 2);
    if (check <= 0) {
      indexNeed = Math.min(arrMapper.length - 1, i + 1);
      break;
    }
    sumNeed += check;
  }

  let [resurt] = arrMapper;
  let sum = 0;
  for (let i = 0; i <= indexNeed - 1; i++) {
    const current = i + 1;
    const sumFromi = (arrMapper[i] - arrMapper[i + 1]) * current;
    const add = sum + sumFromi;
    if (add <= sumNeed) {
      sum += sumFromi;
      resurt = arrMapper[i + 1];
    } else {
      const remain = sumNeed - sum;
      const div = parseInt(remain / current);
      resurt = arrMapper[i] - div;
      break;
    }
  }
  return resurt;
}

module.exports = {
  getMinTime: (tasks, k) => {
    if (k === 1) {
      return tasks.length;
    }

    const arrMapper = new Array(k).fill(0);

    for (let i = 0; i < tasks.length; i++) {
      arrMapper[tasks[i] - 1]++;
    }
    arrMapper.sort((a, b) => b - a);

    let l = 1;
    let [r] = arrMapper;
    let m = parseInt((l + r) / 2);

    let [res] = arrMapper;

    while (l !== m && r !== m) {
      const cacl = caclTime(m, arrMapper);
      if (cacl > m) {
        l = m;
      } else {
        r = m;
        res = Math.min(res, m);
      }
      m = parseInt((l + r) / 2);
    }

    for (let i = l; i <= r; i++) {
      const cacl = caclTime(i, arrMapper);
      if (cacl <= i) {
        res = Math.min(res, i);
      }
    }

    return res;
  },
};
