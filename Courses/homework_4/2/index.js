/* eslint-disable no-unused-vars */
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const toDoListURL = 'https://jsonplaceholder.typicode.com/todos';

const users = () =>{
  return fetch(usersURL).then(response => {
    return response.json();
  })
};

const toDo = () =>{
  return fetch(toDoListURL).then(response => {
    return response.json();
  })
};

const showComplete = () =>{
let completedIdList = [];
let completedList = [];
  toDo()
.then(
  data =>{
    for (const [key, value] of Object.entries(data)){
    if (value.completed === true){
      completedIdList.push(value.id)
    }
  } return completedIdList
})
.catch((error) => {
  console.log(error)
});

  users()
.then(data =>{
  for (const [key, value] of Object.entries(data)){
    completedIdList.forEach(element => {
      if(value.id === element){ 
        let id = parseInt(element)
        completedList.push(data[id-1])
      }
  })}
  console.log(completedList)
  return completedList;
})
.catch((error) => {
  console.log(error)
});
}

showComplete();