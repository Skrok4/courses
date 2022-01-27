xport function basicOp(operation, a, b){
  if (isNaN(a) || isNaN(b)) {
    return 0;
  }

  const numA = parseInt(a);
  const numB = parseInt(b);

  switch (operation) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    
    case '*':
      return numA * numB;
    
    case '/':
      return numA / numB;
    
    default:
      return 0;
  }
}
