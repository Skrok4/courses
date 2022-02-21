import { getData } from '../getData/main';
import { expectedResult, sortedList } from './__mocks__/script';
import { sortData } from './index';

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(expectedResult),
    });
});


describe('Test getData function', () => {

  test('Should return a data from url in object format', async() =>{
    const result = await getData('https://fakestoreapi.com/products');

    expect(result).toBe(expectedResult);
  });
});


describe('Test sortData function', () => {
  test('Should return the same data sorted by price and category', async() =>{
    const result = await sortData();

    expect(result).toStrictEqual(sortedList);
  });
});