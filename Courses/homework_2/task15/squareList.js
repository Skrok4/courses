export const squareList = (array) =>{
    
  return array.map((item) => 
  ((item > 0 && item % 1 == 0) ? Math.pow(item,2) : null)).filter(Number);
};
