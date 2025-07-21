/** 
 * You’re assembling a custom mechanical keyboard.
 * Each required part has a delivery time in days and an assembly time in hours.
 * You can only assemble a part after it arrives, and you can only work on one part at a time.
 * Given an array of parts where each part is { name, arrivalDays, assemblyHours },
 * return the minimum total hours needed to finish assembling all parts, starting from hour 0.

Example:

minAssemblyTime([
  { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
  { name: "switches", arrivalDays: 2, assemblyHours: 3 },
  { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
  { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
  { name: "case", arrivalDays: 3, assemblyHours: 2 }
])

> 74
*/

type Part = {
  name: string;
  arrivalDays: number;
  assemblyHours: number;
};

const minAssemblyTime = (parts: Part[]): number => {
  return parts
    .sort((partA, partB) => partA.arrivalDays - partB.arrivalDays)
    .reduce((totalHours, part) => {
      const arrivalDayInHours = part.arrivalDays * 24;
      if (totalHours < arrivalDayInHours)
        return arrivalDayInHours + part.assemblyHours;

      return totalHours + part.assemblyHours;
    }, 0);
};

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
    { name: "switches", arrivalDays: 2, assemblyHours: 3 },
    { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
    { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
    { name: "case", arrivalDays: 3, assemblyHours: 2 },
  ]) === 74
);

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 0, assemblyHours: 2 },
    { name: "switches", arrivalDays: 0, assemblyHours: 3 },
    { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
    { name: "PCB", arrivalDays: 0, assemblyHours: 4 },
    { name: "case", arrivalDays: 0, assemblyHours: 2 },
  ]) === 12
);

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 0, assemblyHours: 24 },
    { name: "switches", arrivalDays: 2, assemblyHours: 6 },
    { name: "stabilizers", arrivalDays: 1, assemblyHours: 12 },
    { name: "PCB", arrivalDays: 1, assemblyHours: 12 },
    { name: "case", arrivalDays: 0, assemblyHours: 24 },
  ]) === 78
);
