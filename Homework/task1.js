export function basicOp(operation, firstNum, secondNum){
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return 0
    }
    const num1 = parseInt(firstNum)
    const num2 = parseInt(secondNum)
    switch (operation) {
        case "+":
            return num1 + num2
    
        case "-":
            return num1 - num2
    
        case "*":
            return num1 * num2
    
        case "/":
            return num1 / num2
    
        default:
            return 0
    }
} 
