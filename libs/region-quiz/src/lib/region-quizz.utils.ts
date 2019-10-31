function getRandomIndex(maxRange: number): number {
  return +(Math.random() * maxRange).toFixed() || 0;
}

function getRandomNonRepeatedIndexes(selectionSize: number, maxRange: number, selection: number[] = []) {
  const randomNum = getRandomIndex(maxRange);

  if (selection.includes(randomNum)) {
    return getRandomNonRepeatedIndexes(selectionSize, maxRange, selection)
  }

  if (selectionSize > 1) {
    return getRandomNonRepeatedIndexes(selectionSize - 1, maxRange, [...selection, randomNum])
  }

  return [...selection, randomNum]
}

export const RegionQuizzUtils = {
  getRandomIndex,
  getRandomNonRepeatedIndexes
}
