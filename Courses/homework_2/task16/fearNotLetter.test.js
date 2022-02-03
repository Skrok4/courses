import { fearNotLetter } from './fearNotLetter';

describe('Test fearNotLetter function', () => {
    test('Should return \'d\' when passed "abce"', () => {
      expect(fearNotLetter('abce')).toBe('d');
    });
  
    test('Should return \'i\' when passed "abcdefghjklmno"', () => {
      expect(fearNotLetter('abcdefghjklmno')).toBe('i');
    });
  
    test('Should return \'u\' when passed "stvwx"', () => {
      expect(fearNotLetter('stvwx')).toBe('u');
    });
  
    test('Should return \'undefined\' when passed all alphabet', () => {
      expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
    });
  
  });