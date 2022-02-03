export const createAdder = (value) => {
  
    if (typeof value !== 'number' && typeof value !== 'undefined') {
      
      return 'Wrong input value';
    }
  
    let sum = value ?? 0;
  
    return (...args) => {
      for (const arg of args) {
        sum += arg;
      }
  
      return sum;
    };
  };
  
  