export const objectToStringCommas = (obj: { name: string }[]) => {
  let objectToArray: string[] = [];

  if (obj.length === 0 || obj === null) return '-';

  obj.map((str) => objectToArray.push(str.name));
  return objectToArray.join(', ');
};
