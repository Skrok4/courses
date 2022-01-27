export function isPalindrome(str){ 
    const string = str.replace(/\W/g, '').toLowerCase();
    const reverseString = string.split('').reverse().join('')
    return string === reverseString ? true : false;
}
