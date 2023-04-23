const str =
  '700 493 503 508 496 527 514 490 517 539 504 509 517 485 495 490 522 354 517 710 502 492 496 511 516 487 513 514 502 515 522 518 501 514 495 518 482 516 499 503 517 513 361 491 533 545 491 479 487 504 502 509 517 374 516 517 498 513 507 509 510 510 555 484 560 490 512 480 496 496 540 534 366 477 502 525 481 501 508 499 521 508 511 512 540 457 491 497 504 490 500 493 365 505 485 494 513 493 502 508';

const strToArr = (str) => str.split(' ').map((x) => parseInt(x, 10));

const arr = [
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
];

const diff = 500;

const detectErrorCoords = (arr) => {
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
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 2 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 1 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y === arr[x].length - 1) {
            if (z === 0) {
              // 3 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 4 точка
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 2 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y > 0 && y < arr[x].length - 1) {
            if (z === 0) {
              // 3 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 4 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 1 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
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
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 6 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 5 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y === arr[x].length - 1) {
            if (z === 0) {
              // 7 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 8 точка
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 6 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            }
          } else if (y > 0 && y < arr[x].length - 1) {
            if (z === 0) {
              // 7 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 8 грань
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 2 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
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
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 10 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 3 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
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
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z === arr[x][y].length - 1) {
              // 12 грань
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
              ) {
                errorCoordsArr.push([x, y, z]);
              }
            } else if (z > 0 && z < arr[x][y].length - 1) {
              // 4 поверхность
              if (
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
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
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z + 1]]) > diff
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
                Math.abs(arr[x][y][z] - arr[x + 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x - 1][y][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y + 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y - 1][[z]]) > diff &&
                Math.abs(arr[x][y][z] - arr[x][y][[z - 1]]) > diff
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
