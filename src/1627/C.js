module.exports = {
  getWeights: (ways) => {
    const adj = Array.from(Array(ways.length + 2), () => []);
    for (let i = 0; i < ways.length; i++) {
      const [u, v] = ways[i];
      adj[u].push([v, i]);
      adj[v].push([u, i]);
    }

    let leaf;
    let ok = true;
    for (let i = 1; i <= ways.length + 1; i++) {
      if (adj[i].length > 2) {
        ok = false;
      }
      if (adj[i].length === 1) {
        leaf = i;
      }
    }

    if (!ok) {
      return [-1];
    }

    const ans = [];
    let cur = leaf;
    let last;
    for (let i = 0; i < ways.length; i++) {
      for (const [u, j] of adj[cur]) {
        if (u === last) {
          continue;
        }
        ans[j] = i & 1 ? 2 : 3;
        last = cur;
        cur = u;
        break;
      }
    }

    return ans;
  },
};
