import { calculateRentalCost } from './calculateRentalCost';

describe('Test calculateRentalCost function that should return the total rent price amount for a different count of days', () => {
  
  test('Should return 80, when pass 2 days', () => {
    expect(calculateRentalCost(2)).toBe(80);
  });

  test('Should return 100, when pass 3 days', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });

  test('Should return 230, when pass 7 days', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
});
