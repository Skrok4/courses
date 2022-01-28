import {alphabetPosition} from './task10'

describe('Test alphabetPosition function', () => {
    test ('Should calculates the number of times the vowel letter insist in the phrase:', ()=>{
        expect(alphabetPosition("The sunset sets at twelve o'clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    });
});
