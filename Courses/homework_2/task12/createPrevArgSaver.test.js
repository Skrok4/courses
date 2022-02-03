import { createPrevArgSaver } from './createPrevArgSaver';

const argSaver = createPrevArgSaver();

describe('Test createPrevArgSave function', () => {
  test('Should return undefined, when passed 123', () => {
    expect(argSaver(123)).toBe(undefined);
  });

  test('Should return 123, when passed 456', () => {
    expect(argSaver(456)).toBe(123);
  });

  test('Should return 456, when passed (100, 200, 300)', () => {
    expect(argSaver(100, 200, 300)).toBe(456);
  });

  test('Should return 100, when pass ()', () => {
    expect(argSaver()).toBe(100);
  });

  test('Should return undefined, when passed 741', () => {
    expect(argSaver(741)).toBe(undefined);
  });
});