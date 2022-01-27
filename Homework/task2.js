export function stringMerge(str1, str2, symbol) {
  const a = str1.split(symbol)[0];
  const pos = str2.indexOf(symbol);
  const b = str2.substr(pos);

  return a.concat(b);
}
