export function alphabetPosition(string){
    let lettersPosition = '';
    for (let index = 0; index < string.length; index++) {
      if (string.charCodeAt(index) > 64 && string.charCodeAt(index) < 91) {
        lettersPosition += `${(string.charCodeAt(index)) - 64} `;
      }
      if (string.charCodeAt(index) > 96 && string.charCodeAt(index) < 123) {
        lettersPosition += `${(string.charCodeAt(index)) - 96} `;
      }
    }
    return lettersPosition.slice(0, -1);
  }
