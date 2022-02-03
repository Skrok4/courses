export  const openOrSenior = (listOfTeachers) =>{
  const teachersResultList = [];
  const experience = 15;
  const minAge = 40;

  for(let index = 0;index < listOfTeachers.length; index++){
    if(listOfTeachers[index].length !== 2 || typeof listOfTeachers[index][0] !== 'number' || typeof listOfTeachers[index][1] !== 'number' ) {
      return 'Wrong form of input!';
    }

    if(listOfTeachers[index][0] >= minAge && listOfTeachers[index][1] > experience) {
      teachersResultList.push('Senior');
    } else {
      teachersResultList.push('Open'); 
    }
  }
  
  return teachersResultList;
};
