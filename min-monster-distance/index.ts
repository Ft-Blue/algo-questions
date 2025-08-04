/** Given an array arr representing the positions of monsters along a straight line,
 * and an integer d representing the minimum safe distance required between any two monsters,
 * write a function to determine if all monsters are at least d units apart.
 *
 * If not, return the smallest distance found between any two monsters.
 * If all monsters are safely spaced, return -1.
 *
 * Examples:
 * let monsters = [3, 8, 10, 15];
 * let d = 6;
 * minMonsterDistance(monsters, d)
 * > 2
 *
 * minMonsterDistance([5, 9, 14, 18], 4)
 * > -1
 */

const minMonsterDistance = (positions: number[], safeDistance: number) => {
  const monsterDistance = positions
    .slice(0, -1)
    .map((position, index) => positions[index + 1] - position);

  const minDistance = Math.min(...monsterDistance);

  return minDistance >= safeDistance ? -1 : minDistance;
};

console.log(minMonsterDistance([3, 8, 10, 15], 6) === 2);

console.log(minMonsterDistance([5, 9, 14, 18], 4) === -1);
