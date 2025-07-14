/*
 Find the last non-repeating character in a given string. If all characters repeat, return an empty string.
Example:
> nonRepeat('candy canes do taste yummy')
> 'u'
*/

const nonRepeat = (sentence: string) => {
  const characterIndex = {} as Record<string, number>;

  const characterFrequency = sentence.split("").reduce((acc, char) => {
    if (char in characterIndex) {
      acc[characterIndex[char]].freq += 1;
    } else {
      characterIndex[char] = acc.length;
      acc.push({ char, freq: 1 });
    }

    return acc;
  }, [] as { char: string; freq: number }[]);

  const nonRepeatCharacters = characterFrequency.filter(
    (record) => record.freq === 1
  );

  return nonRepeatCharacters.length > 0
    ? nonRepeatCharacters[nonRepeatCharacters.length - 1].char
    : "";
};

console.log(nonRepeat("candy canes do taste yummy"));
