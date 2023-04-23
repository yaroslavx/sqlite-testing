export const detectErrorCoords = (arr: number[][][], diff: number) => {
  const errorCoordsArr = [];
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      for (let z = 0; z < arr[x][y].length; z++) {
        if (
          Math.abs(
            arr[x][y][z] - (arr[x + 1] ? arr[x + 1][y][z] : arr[x][y][z])
          ) > diff &&
          Math.abs(
            arr[x][y][z] - (arr[x - 1] ? arr[x - 1][y][z] : arr[x][y][z])
          ) > diff &&
          Math.abs(
            arr[x][y][z] - (arr[x][y + 1] ? arr[x][y + 1][z] : arr[x][y][z])
          ) > diff &&
          Math.abs(
            arr[x][y][z] - (arr[x][y - 1] ? arr[x][y - 1][z] : arr[x][y][z])
          ) > diff &&
          Math.abs(
            arr[x][y][z] - (arr[x][y][z + 1] ? arr[x][y][z + 1] : arr[x][y][z])
          ) > diff &&
          Math.abs(
            arr[x][y][z] - (arr[x][y][z - 1] ? arr[x][y][z - 1] : arr[x][y][z])
          ) > diff
        ) {
          errorCoordsArr.push([x, y, z]);
        } else if (x === 0) {
          if (y === 0) {
            if (z === 0) {
              // 1 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 2 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 1 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y === arr[x].length - 1) {
            if (z === 0) {
              // 3 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 4 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 2 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y > 0 && y < arr[x].length - 1) {
            if (z === 0) {
              // 3 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 4 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 1 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        } else if (x === arr.length - 1) {
          if (y === 0) {
            if (z === 0) {
              // 5 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 6 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 5 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y === arr[x].length - 1) {
            if (z === 0) {
              // 7 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 8 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 6 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y > 0 && y < arr[x].length - 1) {
            if (z === 0) {
              // 7 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 8 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 2 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        } else if (y === 0) {
          if (x > 0 && x < arr[x].length - 1) {
            if (z === 0) {
              // 9 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 10 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 3 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        } else if (y === arr.length - 1) {
          if (x > 0 && x < arr[x].length - 1) {
            if (z === 0) {
              // 11 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 12 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 4 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        } else if (z === 0) {
          if (x > 0 && x < arr[x].length - 1) {
            if (y > 0 && y < arr[x][y].length - 1) {
              // 5 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z + 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        } else if (z === arr.length - 1) {
          if (x > 0 && x < arr[x].length - 1) {
            if (y > 0 && y < arr[x][y].length - 1) {
              // 6 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][z]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][z - 1]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          }
        }
      }
    }
  }
  return errorCoordsArr;
};
