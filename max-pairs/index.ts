/*
You are given an array of strings representing a collection of shoes.
Each shoe is labeled with its type ("L" for left or "R" for right) and its size.
Determine the maximum number of matching pairs of shoes that can be formed.
*/

type shoe = {
  fit: "L" | "R";
  size: number;
};

const maxPairs = (shoes: shoe[]) => {
  const shoeCountBySize = shoes.reduce((acc, shoe) => {
    if (!acc[shoe.size]) acc[shoe.size] = { L: 0, R: 0 };

    acc[shoe.size][shoe.fit] += 1;

    return acc;
  }, {} as Record<number, { L: number; R: number }>);

  return Object.values(shoeCountBySize).reduce(
    (pairsCount, shoeCountByFit) =>
      pairsCount + Math.min(...Object.values(shoeCountByFit)),
    0
  );
};

console.log(
  maxPairs([
    { fit: "L", size: 10 },
    { fit: "R", size: 10 },
    { fit: "L", size: 11 },
    { fit: "R", size: 10 },
    { fit: "L", size: 10 },
    { fit: "R", size: 11 },
  ])
); // Output: 3

console.log(
  maxPairs([
    { fit: "L", size: 10 },
    { fit: "L", size: 11 },
    { fit: "L", size: 12 },
    { fit: "L", size: 13 },
  ])
); // Output: 0

console.log(
  maxPairs([
    { fit: "L", size: 8 },
    { fit: "L", size: 8 },
    { fit: "L", size: 8 },
    { fit: "R", size: 8 },
  ])
); // Output: 1
