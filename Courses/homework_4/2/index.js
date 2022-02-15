const usersURL = 'https://jsonplaceholder.typicode.com/users';
const toDoListURL = 'https://jsonplaceholder.typicode.com/todos';

const users = () =>{
  return fetch(usersURL).then(response => {
    return response.json();
  });
};

const toDo = () =>{
  return fetch(toDoListURL).then(response => {
    return response.json();
  });
};

const showComplete = () =>{
  const completedIdList = [];
  const completedList = [];

  toDo()
    .then(
      data =>{
        for (const [, value] of Object.entries(data)){
          if (value.completed === true){
            completedIdList.push(value.id);
          }
        }

        return completedIdList;
      })
    .catch((error) => {
      return error;
    });

  users()
    .then(data =>{
      for (const [, value] of Object.entries(data)){
        completedIdList.forEach(element => {
          if(value.id === element){ 
            const id = parseInt(element);

            completedList.push(data[id - 1]);
          }
        });
      }

      return completedList;
    })
    .catch((error) => {
      return error;
    });
};

showComplete();
