export function basicOp(operation, firstNum, secondNum){
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return 0
    }
    let num1 = parseInt(firstNum)
    let num2 = parseInt(secondNum)
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
