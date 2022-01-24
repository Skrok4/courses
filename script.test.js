
import {basicOp} from './script'
import {stringMerge} from './script'
import {strToNumber} from './script'
import {createPhoneNumber} from './script'
import {getTime} from './script'
//1
//const basicOp = require('./script');
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
        expect(strToNumber('1 + 2')).toBe('a: 1, b: 2')
    });
     test ('Make numbers from string formula, that separated one of math operand and return it:', ()=>{
        expect(strToNumber('1.2 * -3.4')).toBe('a: 1.2, b: -3.4')
    });
    test ('Make numbers from string formula, that separated one of math operand and return it:', ()=>{
        expect(strToNumber('1 - 2')).toBe('a: 1, b: 2')
    });
    test ('Make numbers from string formula, that separated one of math operand and return it:', ()=>{
        expect(strToNumber('1 - -2')).toBe('a: 1, b: -2')
    });
});

//5
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
