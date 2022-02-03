export const invertColor = (colorInHexFormat) =>{

  const hexSymbols = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const hexSymbolsReverse = [...hexSymbols].reverse();
  let invertHex = '#';
  
  colorInHexFormat = colorInHexFormat.toLowerCase();

  for (let i = 0; i < colorInHexFormat.length; i++) {
    const index = hexSymbols.indexOf(colorInHexFormat[i]);

    if (index >= 0) {
      invertHex += hexSymbolsReverse[index];
    }
  }

  return invertHex;
};
