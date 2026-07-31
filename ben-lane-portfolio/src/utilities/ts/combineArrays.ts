import { capitaliseString } from "./capitaliseString";

export function combineStringArrays(removeDuplicates: boolean, ...arrays: string[][]): string[] {
  
  const addedItems = new Set<string>();
  arrays[0].forEach((item: string) => { addedItems.add(capitaliseString(item)); });
  arrays.shift();
  arrays.forEach((array) => {
    array.filter((item: string) => {
      if (addedItems.has(capitaliseString(item)) && removeDuplicates) { return false;}
      addedItems.add(capitaliseString(item));
      return true;
    })
  });

  const combinedString: string[] =  [...addedItems];

  return combinedString;
}