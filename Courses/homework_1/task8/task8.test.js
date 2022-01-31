import {countOccurrences} from './task8'

describe('Test countOccurren function', () => {
    test ('Should calculates the number of times the letter "i" appears in the phrase "ability", must return: 2', ()=>{
        expect(countOccurrences('ability', 'i')).toBe(2);
    });
    test ('Should calculates the number of times the letter "a" appears in the phrase "abc", must return: 1', ()=>{
        expect(countOccurrences('abc', 'a')).toBe(1);
    });
    test ('Should calculates the number of times the letter "a" appears in the phrase "ABC", must return: 1', ()=>{
        expect(countOccurrences('ABC', 'a')).toBe(1);
    });
    test ('Should calculates the number of times the letter "g" appears in the phrase "Reg FunC gg", must return: 3', ()=>{
        expect(countOccurrences('Reg FunC gg', 'g')).toBe(3);
    });
});