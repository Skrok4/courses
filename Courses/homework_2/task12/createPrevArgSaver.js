export const createPrevArgSaver = () => {
    let previousState;
    let currentState;
    
    return (state) => {
      previousState = currentState;
      currentState = state;
  
      return previousState;
    };
  
  };
