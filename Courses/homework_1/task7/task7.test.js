import {swapCase} from './task7'

describe('Test task 7:', () => {
    test ('Function should swap the case for each of the letters "aBc". Must be result: AbC', ()=>{
        expect(swapCase('aBc')).toBe('AbC');
    });
    test ('Function should swap the case for each of the letters "GooD". Must be result: gOOd', ()=>{
        expect(swapCase('GooD')).toBe('gOOd');
    });
    test ('Function should swap the case for each of the letters "hello". Must be result: HELLO', ()=>{
        expect(swapCase('hello')).toBe('HELLO');
    });
    test ('Function shouldn not change numbers. Must be result: 75386', ()=>{
        expect(swapCase("75386")).toBe('75386');
    });
});