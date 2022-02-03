export const squareList = (array) =>{
    
  return array.map((item) => 
  ((item > 0 && item % 1 == 0) ? item * item : null)).filter(Number);
};
