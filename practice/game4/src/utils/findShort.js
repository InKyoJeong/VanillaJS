import Dijkstra from "./Dijkstra.js";
import { sections } from "../data/index.js";

export const dijkstraDistance = new Dijkstra();
export const dijkstraTime = new Dijkstra();

// const resultShortDistance = dijkstraDistance.findShortestPath("V1", "V3");
// const resultShortTime = dijkstraTime.findShortestPath("V1", "V3");

sections.forEach((v) => {
  dijkstraDistance.addEdge(v.section[0], v.section[1], v.distance);
  dijkstraDistance.addEdge(v.section[1], v.section[0], v.distance);
});

sections.forEach((v) => {
  dijkstraTime.addEdge(v.section[0], v.section[1], v.time);
  dijkstraTime.addEdge(v.section[1], v.section[0], v.time);
});
