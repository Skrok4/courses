import {strToNumber} from './task3'

describe('Test task 3:', () => {
    test ('Should return phone number that were consist of array elements:', ()=>{
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
    })
});
