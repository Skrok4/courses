export function basicOp(operation, a, b){
    if (isNaN(a) || isNaN(b)) {
        return 0
    }
    let numA = parseInt(a)
    let numB = parseInt(b)
    switch (operation) {
        case "+":
            return numA + numB
    
        case "-":
            return numA - numB
    
        case "*":
            return numA * numB
    
        case "/":
            return numA / numB
    
        default:
            return 0
    }
} 
