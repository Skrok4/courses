import {basicOp} from './task1'
describe('Test basicOp function:', () => {
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
