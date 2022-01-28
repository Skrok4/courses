export function vowelCount(string) {
  let counter = string.match(/a|e|i|o|u/g) || [];

  return counter.length;
}
