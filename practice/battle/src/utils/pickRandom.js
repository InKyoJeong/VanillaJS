import { NUM } from '../constants/index.js';

export const pickRandom = () => {
  return MissionUtils.Random.pickNumberInRange(NUM.MIN_RANDOM, NUM.MAX_RANDOM);
};
