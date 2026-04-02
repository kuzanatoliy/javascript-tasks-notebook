/* eslint-disable max-depth */
module.exports = {
  isItPossibleToSort: (arr) => {
    const graph = [];
    for (let i = 0; i < arr.length; i++) {
      graph.push([]);
    }

    for (let i = 1; i <= Math.floor(arr.length / 2); i++) {
      const u = i - 1;
      const v = 2 * i - 1;
      graph[u].push(v);
      graph[v].push(u);
    }

    const visited = [];
    for (let i = 0; i < arr.length; i++) {
      visited.push(false);
    }

    let possible = true;

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        const stack = [i];
        visited[i] = true;
        const comp = [];

        while (stack.length > 0) {
          const cur = stack.pop();
          comp.push(cur);

          for (let j = 0; j < graph[cur].length; j++) {
            const nxt = graph[cur][j];
            if (!visited[nxt]) {
              visited[nxt] = true;
              stack.push(nxt);
            }
          }
        }

        const values = [];
        const targets = [];

        for (let j = 0; j < comp.length; j++) {
          values.push(arr[comp[j]]);
          targets.push(comp[j] + 1);
        }

        values.sort((x, y) => x - y);
        targets.sort((x, y) => x - y);

        for (let j = 0; j < values.length; j++) {
          if (values[j] !== targets[j]) {
            possible = false;
            break;
          }
        }

        if (!possible) {
          break;
        }
      }
    }

    return possible ? 'YES' : 'NO';
  },
};
