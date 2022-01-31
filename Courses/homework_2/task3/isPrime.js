export const isPrime = (testNumber)=>{

  if (testNumber <= 1 || typeof testNumber !== 'number'){
    return false;
  }

  for (let i = 2; i < testNumber; i++) {
    if (testNumber % i === 0) {
      return false;
    }
  }

  return true;
};
