import { reverseWords } from './reverseWords';

describe('Test reverseWords function passed a string, and reverses each word in the string', () => {

    test('Should return "elbuod  secaps", when passed "double  spaces"', () => {
      expect(reverseWords('double  spaces')).toBe('elbuod  secaps');
    });
  
    test('Should return "ehT kciuq nworb xof spmuj revo eht yzal .god", when passed "The quick brown fox jumps over the lazy dog."', () => {
      expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
    });
  
});