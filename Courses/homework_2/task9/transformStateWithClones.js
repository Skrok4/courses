export const transformStateWithClones = (state, transforms) => {
    const cloneOfState = {...state};
    const resultOfAllPerfomed = [];
    
    transforms.forEach(element => {
      switch (element.operation) {
        case 'addProperties':
          for (const key in element.properties) {
            cloneOfState[key] = element.properties[key];
          }
          resultOfAllPerfomed.push({...cloneOfState});
          break;
        case 'clear':
          for (const key in cloneOfState) {
            delete cloneOfState[key];
          }
          resultOfAllPerfomed.push({...cloneOfState});
          break;
        case 'removeProperties':
          element.properties.forEach(proper => {
            delete cloneOfState[proper];
          });
          resultOfAllPerfomed.push({...cloneOfState});
          break;
        default:
          return 'Error! Wrong operation';
      }
    });
  
    return resultOfAllPerfomed;
  };