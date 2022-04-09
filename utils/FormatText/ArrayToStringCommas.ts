export const arrayToStringCommas = (arr: string[]) => {
  if (arr.length === 0 || arr === null || arr === undefined) return '-';
  return arr.join(', ');
};
