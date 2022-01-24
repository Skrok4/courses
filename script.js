//1
console.log("1 Task");
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

//2
console.log("2 Task");
export function stringMerge(str1, str2, symbol)
{
    let a = str1.split(symbol)[0];
    let pos = str2.indexOf(symbol)
    let b = str2.substr(pos,)
    return a.concat(b);
}

//3
console.log("3 Task");
export function createPhoneNumber(numbers) {
    let firstpart = ""
    let secondpart = ""
    let thirdpart = ""
    for (var i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString()
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString()
        } else if (i >= 6) {
            thirdpart += numbers[i].toString()
        }
    }
    return `(${firstpart}) ${secondpart}-${thirdpart}`
}   
//4
console.log("4 Task");
export function strToNumber(str) {
let array = str.split(" ")
if(array.length != 3) {
    return "Error"
}
if(['+', '-', '/', '*'].indexOf(array[1]) === -1){
    return "Operator input wrong"
}
return `a: ${array[0]}, b: ${array[2]}`
}

//5
console.log("5 Task");
export function getTime(str){ 
    let listIdx = []
    let lastIndex = -1
    while ((lastIndex = str.indexOf(':', lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex)
    }
    for (let index = 0; index < listIdx.length; index++){
    let left = str.substr(listIdx[index]-2, 2)
    let right = str.substr(listIdx[index]+1, 2)
    if ( parseInt(left) < 0 || parseInt(left) >= 24) {
        continue;
    }
    else if (parseInt(right) < 0 || parseInt(right) >= 60) {
        continue;
    }
    return `${left}:${right}`;
} 
return ""
}
