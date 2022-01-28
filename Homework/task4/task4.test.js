import {createPhoneNumber} from './task4'

describe('Test createPhoneNumber function:', () => {
    test ('Make numbers from string formula 1 + 2, and should return: a: 1, b: 2', ()=>{
        expect(strToNumber('1 + 2')).toBe('a: 1, b: 2');
    });
    test ('Make numbers from string formula 1.2 * -3.4, and should return: a: 1.2, b: -3.4', ()=>{
        expect(strToNumber('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
    });
    test ('Make numbers from string formula 1 - 2, and should return: a: 1, b: 2', ()=>{
        expect(strToNumber('1 - 2')).toBe('a: 1, b: 2');
    });
    test ('Make numbers from string formula 1 - -2, and should return: a: 1, b: -2', ()=>{
        expect(strToNumber('1 - -2')).toBe('a: 1, b: -2')
    });
});
