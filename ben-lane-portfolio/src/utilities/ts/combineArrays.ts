import { capitaliseString } from "./capitaliseString";

export function combineTagArrays(...arrays: string[][]): string[] {
  
  const frequencyMap = new Map<string, number>();

  for (const array of arrays) {
    for (const rawItem of array) {
      const item = capitaliseString(rawItem);
      const count = frequencyMap.get(item) ?? 0;
      frequencyMap.set(item, count + 1);
    }
  }

  const sortedItems = Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([item]) => item);

  return sortedItems;
}