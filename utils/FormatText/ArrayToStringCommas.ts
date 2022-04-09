export const arrayToStringCommas = (arr: string[]) => {
  if (arr.length === 0 || arr === null) return '-';
  return arr.join(', ');
};
