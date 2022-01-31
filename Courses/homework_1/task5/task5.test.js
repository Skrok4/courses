import {getTime} from './task5'
import {getTimeReg} from './task5'

describe('Test getTime function:', () => {
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

describe('Test getTimeReg function:', () => {
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