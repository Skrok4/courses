export const moveZeros = (importArray) =>{
  const arrayOfMatchesWith0 = [];
  const zero = 0;

  for(let index = 0; index < importArray.length; index++){
    if (importArray[index] === zero){
      arrayOfMatchesWith0.push(index);
    }
  }
  arrayOfMatchesWith0.reverse();

  for(let index = 0; index < arrayOfMatchesWith0.length; index++){
    importArray.splice(arrayOfMatchesWith0[index], 1);
    importArray.push(zero);
  }

  return importArray;
};
