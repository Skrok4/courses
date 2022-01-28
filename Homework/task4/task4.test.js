import {createPhoneNumber} from './task4'

describe('Test task 4:', () => {
    test ('Make numbers from string formula, that separated one of math operand and return it:', ()=>{
        expect(strToNumber('1 + 2')).toBe('a: 1, b: 2');
        expect(strToNumber('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
        expect(strToNumber('1 - 2')).toBe('a: 1, b: 2');
        expect(strToNumber('1 - -2')).toBe('a: 1, b: -2')
    });
});
