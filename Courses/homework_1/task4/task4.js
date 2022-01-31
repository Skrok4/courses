export function strToNumber(str) {
    const array = str.split(' ');
  
    if(array.length !== 3) {
      return 'Error';
    }
  
    if(['+', '-', '/', '*'].indexOf(array[1]) === -1){
      return 'Operator input wrong';
    }
  
    return `a: ${array[0]}, b: ${array[2]}`;
  }