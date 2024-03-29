import { frankenSplice } from './frankenSplice';

describe('Test frankenSplice function', () => {

  test('Should return [4, 1, 2, 3, 5] when [1, 2, 3], [4, 5], 1 is passed', () => {
    const result = frankenSplice([1, 2, 3], [4, 5], 1);

    expect(result).toStrictEqual([4, 1, 2, 3, 5]);
  });

  test('Should return ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes'] when first array inserted at second at position 2', () => {

    const result = frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2);

    expect(result).toStrictEqual( ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
  });

  test('Should return [1, 2, 3, 4] when [1, 2, 3, 4], [], 0 is passed', () => {
    const result = frankenSplice([1, 2, 3, 4], [], 0);

    expect(result).toStrictEqual([1, 2, 3, 4]);
  });
});
