/*
 Given a 2D array of 0s and 1s, where 0 represents water and 1 represents land.
 Return the size of the largest "island" in the water.
*/

type GraphNode = {
  id: string;
  position: { row: number; column: number };
  visited?: boolean;
};

type Edges = Record<string, GraphNode[]>;

type Graph = {
  nodes: GraphNode[];
  edges: Edges;
};

const getSurroundingTiles = ({
  rowIndex,
  colIndex,
  rowSize,
  columnSize,
}: {
  rowIndex: number;
  colIndex: number;
  rowSize: number;
  columnSize: number;
}) => {
  const SOURROUNDING_RELATIVE_POSITIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  return SOURROUNDING_RELATIVE_POSITIONS.map((position) => ({
    row: rowIndex + position[0],
    col: colIndex + position[1],
  })).filter(({ row, col }) => {
    const isRowInbound = row >= 0 && row < rowSize;
    const isColumnInbound = col >= 0 && col < columnSize;

    return isRowInbound && isColumnInbound;
  });
};

const buildGraph = (map: number[][]): Graph => {
  const mapGraph: Graph = { nodes: [], edges: {} };

  map.forEach((row, rowIndex) => {
    row.forEach((tile, colIndex) => {
      if (tile === 1)
        mapGraph.nodes.push({
          id: `${rowIndex}-${colIndex}`,
          position: {
            row: rowIndex,
            column: colIndex,
          },
        });
    });
  });

  mapGraph.nodes.forEach(({ id, position }) => {
    const surroundingTiles = getSurroundingTiles({
      rowIndex: position.row,
      colIndex: position.column,
      rowSize: map.length,
      columnSize: map[0].length,
    });

    surroundingTiles.forEach((tile) => {
      if (!mapGraph.edges[id]) mapGraph.edges[id] = [];
      if (map[tile.row][tile.col] === 1)
        mapGraph.edges[id].push({
          id: `${tile.row}-${tile.col}`,
          position: { row: tile.row, column: tile.col },
        });
    });
  });

  return mapGraph;
};

const largestIslandSize = (map: number[][]) => {
  const mapAsGraph = buildGraph(map);
  let largestIslandSize = 0;

  mapAsGraph.nodes.forEach((node) => {
    if (true === node.visited) return;
    node.visited = true;

    let islandSize = 1;
    const linkedNodes = mapAsGraph.edges[node.id];

    while (linkedNodes.length > 0) {
      const nextNodeId = linkedNodes.shift()!.id;
      const nextNode = mapAsGraph.nodes.find(
        (n) => n.id === nextNodeId
      ) as GraphNode;

      if (nextNode.visited) continue;

      linkedNodes.push(...mapAsGraph.edges[nextNode.id]);

      nextNode.visited = true;
      islandSize++;
    }

    if (islandSize > largestIslandSize) largestIslandSize = islandSize;
  });

  return largestIslandSize;
};

const map = [
  [0, 1, 1, 1, 0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 1, 1, 0],
];

console.log(largestIslandSize(map));
