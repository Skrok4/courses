export function swapCase(str) {
  let newString = '';

  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index].toLowerCase()) {
      newString += str[index].toUpperCase();
    } else {
      newString += str[index].toLowerCase();
    }
  }

  return newString;
}
