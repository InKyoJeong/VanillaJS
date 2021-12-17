import Dijkstra from "./Dijkstra.js";
import { sections } from "../data/index.js";

export const dijkstraTime = new Dijkstra();
export const dijkstraDistance = new Dijkstra();

sections.forEach(({ name, time }) => {
  dijkstraTime.addEdge(name[0], name[1], time);
  dijkstraTime.addEdge(name[1], name[0], time);
});

sections.forEach(({ name, distance }) => {
  dijkstraDistance.addEdge(name[0], name[1], distance);
  dijkstraDistance.addEdge(name[1], name[0], distance);
});
