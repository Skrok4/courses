export function countOccurrences(string, symbol) {
    const re = new RegExp(`\\${symbol}\\B|(${symbol})`, 'gi');
    const counter = string.match(re);
    return counter.length
}
