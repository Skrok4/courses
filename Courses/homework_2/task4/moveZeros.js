export const moveZeros = (importArray) =>{

  const arrayWithoutZeros = importArray.filter(element => element !== 0);
  const quantityOfZeros = importArray.length - arrayWithoutZeros.length;
  
  for (let index = 0; index < quantityOfZeros; index++){
    arrayWithoutZeros.push(0);
  }

  return arrayWithoutZeros;
};
