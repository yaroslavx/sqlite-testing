import { str, strToArr, arrTo3DArray } from './arrayUtils';

export const outOfBorders = (
  str: string,
  min: number,
  max: number
): { min: number[]; max: number[] } => {
  const arr = arrTo3DArray(strToArr(str));
  const res: { min: number[]; max: number[] } = { min: [], max: [] };

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      for (let z = 0; z < arr[x][y].length; z++) {
        if (arr[x][y][z] < min) {
          res.min.push(arr[x][y][z]);
        } else if (arr[x][y][z] > max) {
          res.max.push(arr[x][y][z]);
        }
      }
    }
  }
  return res;
};
