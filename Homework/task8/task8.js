export function countOccurrences(string, symbol) {
  const regex = new RegExp(`\\${symbol}\\B|(${symbol})`, 'gi');
  const counter = string.match(regex);

  return counter.length;
}
