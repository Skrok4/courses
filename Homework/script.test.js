
import {basicOp} from './task1'
import {stringMerge} from './task2'
import {strToNumber} from './task3'
import {createPhoneNumber} from './task4'
import {getTime} from './task5'
import {getTimeReg} from './task5(reg)'
import {isPalindrome} from './task6'
import {swapCase} from './task7'
import {countOccurrences} from './task8'
import {vowelCount} from './task9'
import {alphabetPosition} from './task10'

describe('Test task 1:', () => {
    test ('should return 11, when 4 plus 7:', () => {
        expect(basicOp('+', 4, 7)).toBe(11);
    });
    test ('should return -3, when 15 minus 18:', () =>{
        expect(basicOp('-', 15, 18)).toBe(-3);
    });
    test ('should return 25, when 5 multiply by 5:', ()=>{
        expect(basicOp('*', 5, 5)).toBe(25);
    });
    test ('should return 7, when 49 divided by 7:', ()=>{
        expect(basicOp('/', 49, 7)).toBe(7);
    })
    test ('should return 0, when 45 undefinded operation 45:', ()=>{
        expect(basicOp('%', 45, 45)).toBe(0);
    })
})

//2
describe('Test task 2:', () => {
    test ('should return "held" when "hello" + "world" split by "l":', ()=>{
        expect(stringMerge("hello","world","l")).toBe("held");
    });
    test ('should return "codinywhere" when "coding" + "anywhere" split by "n":', ()=>{
        expect(stringMerge("coding","anywhere","n")).toBe("codinywhere");
    });
    test ('should return "jasamson" when "jason" + "samson" split by "s":', ()=>{
        expect(stringMerge("jason","samson","s")).toBe("jasamson");
    });
    test ('should return "wondeople" when "wonderful" + "people" split by "e":', ()=>{
        expect(stringMerge("wonderful","people","e")).toBe("wondeople");
    });
})
//3
describe('Test task 3:', () => {
    test ('Should return phone number that were consist of array elements:', ()=>{
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
    })
});
//4
describe('Test task 4:', () => {
    test ('Make numbers from string formula, that separated one of math operand and return it:', ()=>{
        expect(strToNumber('1 + 2')).toBe('a: 1, b: 2');
        expect(strToNumber('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
        expect(strToNumber('1 - 2')).toBe('a: 1, b: 2');
        expect(strToNumber('1 - -2')).toBe('a: 1, b: -2')
    });
});

describe('Test task 5:', () => {
    test ("Function should return time from string in valid formar 'hh:mm':", ()=>{
        expect(getTime('Breakfast at 09:00')).toBe('09:00')
    });
    test ("Function should return time from string in valid formar 'hh:mm':", ()=>{
        expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00')
    });
    test ("Function should return time from string in valid formar 'hh:mm':", ()=>{
        expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59')
    });
});

describe('Function should return time from string in valid formar "hh:mm":', () => {
    test ('Function should return 09:00', ()=>{
        expect(getTimeReg('Breakfast at 09:00')).toBe('09:00')
    });
    test ('Function should return 21:00', ()=>{
        expect(getTimeReg('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00')
    });
    test ('Function should return 09:59', ()=>{
        expect(getTimeReg('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59')
    });
    test ('returning the empty line', ()=>{
        expect(getTimeReg('Examle empty sring 37:98')).toBe("")
    });
    test ('returning the empty line', ()=>{
        expect(getTimeReg('Its time 22:12@$%&')).toBe("")
    });
});

describe('Test isPalindrome function:', () => {
    test ('Function should return true or false depending string', ()=>{
        expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true)
        expect(isPalindrome('race a car')).toBe(false)
        expect(isPalindrome('Was it a cat I saw?')).toBe(true)
    });
});

describe('Test swapCase function:', () => {
    test ('Function should swap the case for each of the letters', ()=>{
        expect(swapCase('aBc')).toBe('AbC');
        expect(swapCase('GooD')).toBe('gOOd');
        expect(swapCase('hello')).toBe('HELLO');
        expect(swapCase("75386")).toBe('75386');
    });
});

describe('Test countOccurren function', () => {
    test ('Should calculates the number of times the letter appears in the phrase:', ()=>{
        expect(countOccurrences('ability', 'i')).toBe(2);
        expect(countOccurrences('abc', 'a')).toBe(1);
        expect(countOccurrences('ABC', 'a')).toBe(1);
        expect(countOccurrences('Reg FunC gg', 'g')).toBe(3);
    });
});

describe('Test vowelCount function', () => {
    test ('Should calculates the number of times the vowel letter insist in the phrase:', ()=>{
        expect(vowelCount('abracadabra')).toBe(5);
        expect(vowelCount('letter')).toBe(2);
        expect(vowelCount('toy')).toBe(1);
        expect(vowelCount('555')).toBe(0);
    });
});

describe('Test alphabetPosition function', () => {
    test ('Should calculates the number of times the vowel letter insist in the phrase:', ()=>{
        expect(alphabetPosition("The sunset sets at twelve o'clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    });
});
