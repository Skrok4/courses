export const createPrevArgSaver = () => {
    let previousState = undefined;
    let currentState;
    
    return (state) => {
      previousState = currentState;
      currentState = state;
  
      return previousState;
    };
  
  };