export const frankenSplice = (arr1, arr2, index) => {

  if (index > arr2.length || typeof index !== 'number') {
    return 'Error'
  }
    const splicedArray = [...arr2];  
  
    splicedArray.splice(index, 0, ...arr1);
    
    return splicedArray;
};