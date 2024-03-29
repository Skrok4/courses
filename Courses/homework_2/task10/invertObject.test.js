import { invertObject } from './invertObject';

escribe('Describe invertObject function', () => {

    test('Should return empty object when we passed {}', () => {
      const result = invertObject({});
  
      expect(result).toStrictEqual({});
    });
  
    test('Should return {"bar": "foo"} when {"foo": "bar"} is passed', () => {
      const result = invertObject({'foo': 'bar'});
  
      expect(result).toStrictEqual({'bar': 'foo'});
    });
  
    test('Should return {\'2\': \'1\', \'4\': \'2\', \'6\': \'3\'} ' 
    + ' when {\'1\': 2, \'2\': 4, \'3\': 6,} is passed', () => {
      const result = invertObject({
        '1': 2, '2': 4, '3': 6,
      });
  
      expect(result).toStrictEqual({
        '2': '1', '4': '2', '6': '3',
      });
    });
  
    test('Should return null when {"foo": "bar", "hello": "world", "js": "bar" } is passed', () => {
      const result = invertObject({
        'foo': 'bar', 'hello': 'world', 'js': 'bar',
      });
  
      expect(result).toStrictEqual(null);
    });
  });