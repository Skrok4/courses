export function createPhoneNumber(numbers) {
    let firstpart = ""
    let secondpart = ""
    let thirdpart = ""
    for (var i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString()
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString()
        } else {
            thirdpart += numbers[i].toString()
        }
    }
    return `(${firstpart}) ${secondpart}-${thirdpart}`
}   
