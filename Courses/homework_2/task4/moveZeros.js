export const moveZeros = (importArray) =>{
  const indexes = [];
  const zero = 0;

  for(let index = 0; index < importArray.length; index++){
    if (importArray[index] === zero){
      indexes.push(index);
    }
  }
  indexes.reverse();

  for(let index = 0; index < indexes.length; index++){
    importArray.splice(indexes[index], 1);
    importArray.push(zero);
  }

  return importArray;
};
