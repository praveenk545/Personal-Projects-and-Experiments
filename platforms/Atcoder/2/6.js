const BFS = function (cities, source, destination) {
  const graph = {};
  for (const [u, v] of cities) {
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  console.log(graph);
  const queue = [source];
  const visited = new Set();
  visited.add(source);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination) return true;
    for (const road of graph[current] || []) {
      if (!visited.has(road)) {
        visited.add(road);
        queue.push(road);
      }
    }
  }
  return false;
};
const cities = [
  [3, 1],
  [1, 2],
  [2, 3],

];
const n = 1;
const source = 1;
const destination = 3;
console.log(BFS(cities, source, destination));
// bfs=quee
// ciities =[3,1] is one city.
// roades =3,1;
// find all roades are connected to another city.
// 3 2
// 1 2
// 2 3
//    3
//    / \
//   2
//   /
//   1
