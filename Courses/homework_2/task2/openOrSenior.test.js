import { openOrSenior } from './openOrSenior';

describe('Test openOrSenior function that takes a list of pairs [age, experience] and should return member status', 
  () => {
    test('Should return [Open, Senior, Open, Senior], when passed [[31, 10],[55,23],[20, 0],[41, 16]]', () => {
      expect(openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]])).toEqual(['Open', 'Senior', 'Open', 'Senior']);
    });

    test('Should return [Open, Open, Open, Open], when passed [[34, 11],[55,7],[39, 16],[38, 14]]', () => {
      expect(openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])).toEqual(['Open', 'Open', 'Open', 'Open']);
    });
  });
