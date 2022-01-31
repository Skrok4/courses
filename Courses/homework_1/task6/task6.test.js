import {isPalindrome} from './task6'

describe('Test isPalindrome function:', () => {
    test ('Function should return true for first string', ()=>{
        expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true)
    });
    test ('Function should return false for second string', ()=>{
        expect(isPalindrome('race a car')).toBe(false)
    });
    test ('Function should return true for third string', ()=>{
        expect(isPalindrome('Was it a cat I saw?')).toBe(true)
    });
});