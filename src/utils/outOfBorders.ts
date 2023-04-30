import { strToArr, arrTo3DArray } from './arrayUtils';

export const outOfBorders = (
  arr: number[][][] | null,
  min: number = 0,
  max: number = 1000
): { min: string[]; max: string[] } | null => {
  if (!arr) return null;
  const res: { min: string[]; max: string[] } = { min: [], max: [] };

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      for (let z = 0; z < arr[x][y].length; z++) {
        if (arr[x][y][z] < min) {
          res.min.push(`${x}, ${y}, ${z}`);
        } else if (arr[x][y][z] > max) {
          res.max.push(`${x}, ${y}, ${z}`);
        }
      }
    }
  }
  return res;
};
