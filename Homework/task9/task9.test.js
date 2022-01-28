import {vowelCount} from './task9'

describe('Test vowelCount function', () => {
    test ('Calculates the number of times the vowel letter insist in the phrase "abracadabra" must return: 5', ()=>{
        expect(vowelCount('abracadabra')).toBe(5);
    });
    test ('Calculates the number of times the vowel letter insist in the phrase "letter" must return: 2', ()=>{
        expect(vowelCount('letter')).toBe(2);
    });
    test ('Calculates the number of times the vowel letter insist in the phrase "toy" must return: 1', ()=>{
        expect(vowelCount('toy')).toBe(1);
    });
    test ('Calculates the number of times the vowel letter insist in the phrase "555" must return: 0', ()=>{
        expect(vowelCount('555')).toBe(0);
    });
});
