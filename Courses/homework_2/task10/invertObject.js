export const invertObject = (object) =>{
    if (typeof object !== object && !Array.isArray(object) && null !== object) {
      let reverseObject = {};
      const sizeOfObject = Object.keys(object).length;
  
      for (const [key] of Object.entries(object)) {
        reverseObject[object[key]] = key;
      }
  
      if(sizeOfObject > Object.keys(reverseObject).length) {
        reverseObject = null;
      }
  
      return reverseObject;
    } else {
  
      return ('Error! ',object,' is not an object.');
    }
  };
  