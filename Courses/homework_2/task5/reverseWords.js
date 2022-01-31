export const reverseWords = (string)=> {

  return string
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};