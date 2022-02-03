export const squareList = (array) =>{
    const result = [];
  
    result.push(array.map((item) => 
      ((item > 0 && item % 1 == 0) ? item * item : null)).filter(Number));
    
  
    return result.flat();
  };