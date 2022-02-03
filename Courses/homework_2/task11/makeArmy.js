export const makeArmy = (count) => {

    if (!Number.isInteger(count)) {
      return 'Count number must be integer';
    }
    
    const armyArray = [];
    let cellInArray = 0;
  
    while (cellInArray !== count) {
      const position = (armyPos) => () =>  armyPos;
  
      armyArray.push(position(cellInArray));
      cellInArray += 1;
    }
  
    return armyArray;
  };