/** Imagine a simplified version of the game Battleship played on a 2D grid.
 * The grid represents the sea, and each cell can either be empty (.) 
 * or contain a part of a ship (X). 
 * Ships are placed horizontally or vertically, and there are no adjacent ships. 
 * Given a grid, count the number of battleships in it. 
 * 
 * Extra credit: can you make a layout generator for the game given these rules?

Example:

const ships = [
  ['X', 'X', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', '.'],
];

numberOfShips(ships)
> 2
 */

const numberOfShips = (grid: string[][]) => {
  let shipsCount = 0;
  const visited: string[] = [];
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === "X") {
        if (visited.find((cellKey) => cellKey === getKey(i, j))) {
          return;
        }

        visited.push(getKey(i, j));
        let nextShipPart = getNextShipPart({ i, j }, grid);
        while (nextShipPart !== null) {
          const { i: nextI, j: nextJ } = nextShipPart;
          visited.push(getKey(nextI, nextJ));
          nextShipPart = getNextShipPart({ i: nextI, j: nextJ }, grid);
        }
        shipsCount += 1;
      }
    });
  });

  return shipsCount;
};

const getKey = (i: number, j: number) => `${i}-${j}`;

const getNextShipPart = (cell: { i: number; j: number }, grid: string[][]) => {
  const { i, j } = cell;
  if (i < grid.length - 1 && grid[i + 1][j] === "X") return { i: i + 1, j };
  if (j < grid[i].length - 1 && grid[i][j + 1] === "X") return { i, j: j + 1 };

  return null;
};

console.log(
  numberOfShips([
    ["X", "X", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "."],
  ]) === 2
);

console.log(
  numberOfShips([
    ["X", "X", ".", "X"],
    [".", ".", ".", "X"],
    ["X", "X", ".", "X"],
    [".", ".", ".", "X"],
  ]) === 3
);

console.log(
  numberOfShips([
    ["X", "X", ".", "X"],
    [".", ".", ".", "X"],
    ["X", ".", "X", "."],
    ["X", ".", "X", "."],
  ]) === 4
);
