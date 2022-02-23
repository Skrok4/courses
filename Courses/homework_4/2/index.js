import { getData } from '../getData/main.js';

export const getCompletedTasks = async() => {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const toDoListURL = 'https://jsonplaceholder.typicode.com/todos';

  const userList = await getData(usersURL);
  const toDoList = await getData(toDoListURL);

  const userListWithToDo = userList.map((user) => {
    const userCompletedTodo = toDoList.filter(
      (toDo) => toDo.completed && toDo.userId === user.id );
      
    user.toDo = userCompletedTodo;
  });
  return userListWithToDo;
};

//(async() => await getCompletedTasks())();
