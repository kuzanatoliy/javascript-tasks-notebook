/* eslint-disable max-depth */
/* eslint-disable max-lines */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undefined */
/* eslint-disable func-names */
/* eslint-disable max-lines-per-function */
function Queue(amount) {
  if (!(this instanceof Queue)) {
    return new Queue(amount);
  }
  amount = amount || 2048;
  this.amount = amount;
  this.bg = 0;
  this.ed = 0;
  this.arr = [];
}
Queue.prototype = {
  constractor: Queue,
  doubleSize() {
    const target = [];
    const o = this.arr;
    let i = this.bg;
    const j = this.ed;
    const l = this.amount;
    target.push(o[i]);
    i = (i + 1) % l;
    for (; i !== j; i = (i + 1) % l) {
      target.push(o[i]);
    }
    this.amount *= 2;
    this.bg = 0;
    this.ed = target.length;
    this.arr = target;
  },
  isEmpty() {
    return this.bg === this.ed;
  },
  pop() {
    const idx = this.bg;
    this.bg = (this.bg + 1) % this.amount;
    return this.arr[idx];
  },
  push(o) {
    this.arr[this.ed] = o;
    this.ed = (this.ed + 1) % this.amount;
    if (this.isEmpty()) {
      this.doubleSize();
    }
  },
};

const rotater = (function () {
  const door = [
    ['*'],
    ['^', '>', 'v', '<'],
    ['-', '|'],
    ['L', 'U', 'R', 'D'],
    ['+'],
  ];
  const todoor = {};
  let i;
  let j;
  let l;
  for (i = 0; i < 5; ++i) {
    l = door[i].length;
    for (j = 0; j < l; ++j) {
      todoor[door[i][j]] = {
        l,
        x: i,
        y: j,
      };
    }
  }
  function rotateOne(c, t) {
    t = t === undefined ? 1 : t;
    const di = todoor[c];
    return door[di.x][(di.y + t) % di.l];
  }
  return {
    rotateOne,
  };
})();

const steps = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const rules = (function () {
  const right = ['+', '-', '>', 'L', 'U', 'D'];
  const down = ['+', '|', 'v', 'L', 'R', 'U'];
  const left = ['+', '-', '<', 'D', 'R', 'U'];
  const up = ['+', '|', '^', 'D', 'R', 'L'];
  function lg(c, d) {
    for (let i = d.length - 1; i >= 0; --i) {
      if (d[i] === c) {
        return true;
      }
    }
    return false;
  }
  return [
    function (a, b) {
      return lg(a, right) && lg(b, left);
    },
    function (a, b) {
      return lg(a, down) && lg(b, up);
    },
    function (a, b) {
      return lg(a, left) && lg(b, right);
    },
    function (a, b) {
      return lg(a, up) && lg(b, down);
    },
  ];
})();

module.exports = {
  getMinutes: (rows, columns, vec, st, ed) => {
    const n = rows;
    const m = columns;
    st = st.map((e) => e - 1);
    ed = ed.map((e) => e - 1);

    st.push(0);
    let qu = new Queue();
    const used = [];
    used.length = n * m * 4;
    qu.push({
      l: 0,
      p: st,
    });
    used[(st[0] * m + st[1]) * 4 + st[2]] = true;

    let cur;
    let ans = -1;
    let i;
    let j;
    let k;
    let x;
    let xx;
    let ii;
    let jj;
    while (!qu.isEmpty()) {
      cur = qu.pop();
      if (cur.p[0] === ed[0] && cur.p[1] === ed[1]) {
        qu = [];
        ans = cur.l;
        break;
      }
      i = cur.p[0];
      j = cur.p[1];
      x = cur.p[2];
      for (k = 0; k < 4; ++k) {
        ii = i + steps[k][0];
        jj = j + steps[k][1];
        if (
          ii >= 0 &&
          ii < n &&
          jj >= 0 &&
          jj < m &&
          !used[(ii * m + jj) * 4 + x]
        ) {
          if (
            rules[k](
              rotater.rotateOne(vec[i][j], x),
              rotater.rotateOne(vec[ii][jj], x)
            )
          ) {
            qu.push({
              l: cur.l + 1,
              p: [ii, jj, x],
            });
            used[(ii * m + jj) * 4 + x] = true;
          }
        }
      }
      xx = (x + 1) % 4;
      if (!used[(i * m + j) * 4 + xx]) {
        qu.push({
          l: cur.l + 1,
          p: [i, j, xx],
        });
        used[(i * m + j) * 4 + xx] = true;
      }
    }
    return ans;
  },
};
