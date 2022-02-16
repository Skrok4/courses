const usersURL = 'https://jsonplaceholder.typicode.com/users';
const toDoListURL = 'https://jsonplaceholder.typicode.com/todos';

export const getData = async(url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  } catch (error) {
    return error;
  }
};

const getCompletedTasks = async() => {
  const userList = await getData(usersURL);
  const toDoList = await getData(toDoListURL);

  return userList.map((user) => {
    const userCompletedTodo = toDoList.filter(
      (todo) => todo.userId === todo.completed && user.id);
    
    user.todo = userCompletedTodo;

    return user;  
  });
};

getCompletedTasks();
