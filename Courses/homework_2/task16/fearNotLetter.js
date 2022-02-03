export const fearNotLetter = (letters) => {
    if(typeof letters !== 'string') {
      return 'Error! Wrong input';
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const startPosition = alphabet.indexOf(letters[0]);
    
    for (let i = 0; i < letters.length + 1; i++) {
      if (letters[i] !== alphabet[startPosition + i]) {
        return alphabet[startPosition + i];
      }
    }
  
    return undefined;
  };