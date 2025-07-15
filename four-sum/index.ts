/*
Write a function that takes an array of integers and a target sum,
and returns all unique quadruplets [a, b, c, d] in the array
such that a + b + c + d = target
*/

const kSum = (integers: number[], target: number, outputSize: number) => {
  if (outputSize === 0) return [];

  if (outputSize === 1)
    return integers.filter((n) => n === target).map((n) => [n]);

  if (integers.length === 0) return [];

  return [
    ...kSum(integers.slice(1), target - integers[0], outputSize - 1).map(
      (solution) => [integers[0], ...solution]
    ),
    ...kSum(integers.slice(1), target, outputSize),
  ];
};

const fourSum = (integers: number[], target: number) =>
  kSum(integers, target, 4);

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [ [ 1, 0, -1, 0 ], [ 1, -1, -2, 2 ], [ 0, 0, -2, 2 ] ]
console.log(fourSum([], 0)); // []
console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)); // [ [ 1, -5, -4, -3 ] ]
