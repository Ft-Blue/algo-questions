/* For an array of numbers, generate an array where for every element, all neighboring elements are added to itself, and return the sum of that array.

Examples:

[]               -> 0
[1]              -> 1
[1, 4]           -> 10 // (1+4 + 4+1)
[1, 4, 7]        -> 28
[1, 4, 7, 10]    -> 55
[-1, -2, -3]     -> -14
[0.1, 0.2, 0.3]  -> 1.4
[1,-20,300,-4000,50000,-600000,7000000] -> 12338842
*/

const neighborSum = (input: number[]): number => {
  const slidingSum = input.map((num, index) => {
    let sum = num;
    if (index > 0) sum += input[index - 1];
    if (index < input.length - 1) sum += input[index + 1];

    return sum;
  });

  return parseFloat(slidingSum.reduce((a, b) => a + b, 0).toFixed(10));
};

console.log(neighborSum([]) === 0);
console.log(neighborSum([1]) === 1);
console.log(neighborSum([1, 4]) === 10);
console.log(neighborSum([1, 4, 7]) === 28);
console.log(neighborSum([1, 4, 7, 10]) === 55);
console.log(neighborSum([-1, -2, -3]) === -14);
console.log(neighborSum([0.1, 0.2, 0.3]) === 1.4);
console.log(
  neighborSum([1, -20, 300, -4000, 50000, -600000, 7000000]) === 12338842
);
