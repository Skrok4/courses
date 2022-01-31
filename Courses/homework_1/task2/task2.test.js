import {stringMerge} from './task2'

describe('Test stringMerge function:', () => {
    test ('should return "held" when "hello" + "world" split by "l":', ()=>{
        expect(stringMerge("hello","world","l")).toBe("held");
    });
    test ('should return "codinywhere" when "coding" + "anywhere" split by "n":', ()=>{
        expect(stringMerge("coding","anywhere","n")).toBe("codinywhere");
    });
    test ('should return "jasamson" when "jason" + "samson" split by "s":', ()=>{
        expect(stringMerge("jason","samson","s")).toBe("jasamson");
    });
    test ('should return "wondeople" when "wonderful" + "people" split by "e":', ()=>{
        expect(stringMerge("wonderful","people","e")).toBe("wondeople");
    });
})