export function vowelCount(string) {
  const counter = string.match(/[aeiou]/gi) ?? 0;

  return counter.length;
}
