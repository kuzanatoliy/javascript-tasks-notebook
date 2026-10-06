/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._up(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this._down(0);
    }
    return top;
  }

  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.heap[i] <= this.heap[p]) {
        break;
      }
      const temp = this.heap[i];
      this.heap[i] = this.heap[p];
      this.heap[p] = temp;
      i = p;
    }
  }

  _down(i) {
    const len = this.heap.length;
    while ((i << 1) + 1 < len) {
      const left = (i << 1) + 1;
      const right = left + 1;
      let best = left;
      if (right < len && this.heap[right] > this.heap[left]) {
        best = right;
      }
      if (this.heap[i] >= this.heap[best]) {
        break;
      }
      const temp = this.heap[i];
      this.heap[i] = this.heap[best];
      this.heap[best] = temp;
      i = best;
    }
  }
}

module.exports = {
  getMaxScore: (k, arr) => {
    let sum = 0;
    let ans = -Infinity;
    const pq = new MaxPriorityQueue();
    for (let i = 0; i < arr.length; i++) {
      if (pq.size() === k - 1) {
        ans = Math.max(ans, k * arr[i] - sum);
      }
      pq.push(arr[i]);
      sum += arr[i];
      if (pq.size() === k) {
        sum -= pq.top();
        pq.pop();
      }
    }
    return ans;
  },
};
