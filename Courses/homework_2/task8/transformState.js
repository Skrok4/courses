export const transformState = (state, transforms) =>{
    transforms.forEach(element => {
      switch (element.operation) {
        case 'addProperties':
          for (const key in element.properties) {
            state[key] = element.properties[key];
          }
          break;
  
        case 'removeProperties':
          element.properties.forEach(proper => {
            delete state[proper];
          });
          break;
       
        case 'clear':
          for (const key in state) {
            delete state[key];
          }
          break;
  
        default:
          return 'Don\'t contain the correct operation';
      }
    });
  
    return state; 
  };