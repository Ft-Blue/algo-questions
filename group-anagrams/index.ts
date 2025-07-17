/*
Given an array of strings, group the anagrams together.
*/

const groupAnagrams = (words: string[]) => {
  const groupedAnagrams = words.reduce((acc, word) => {
    const anagramGroupKey = word.toLowerCase().split("").sort().join("");
    if (!acc[anagramGroupKey]) acc[anagramGroupKey] = [];

    acc[anagramGroupKey].push(word);
    return acc;
  }, {} as Record<string, string[]>);

  return Object.values(groupedAnagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["vote", "please"]));
console.log(groupAnagrams(["debitcard", "badcredit"]));
