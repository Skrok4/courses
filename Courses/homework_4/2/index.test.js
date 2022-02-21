import { getCompletedTasks } from './index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

const users = [{
  id: 1, name: 'Van', 
}];

const toDo = [
  {
    userId: 1, title: 'Swimming', completed: true, 
  },
  {
    userId: 1, title: 'Resting', completed: false, 
  },
  {
    userId: 1, title: 'Coding', completed: true, 
  },
];

describe('Add completed tasks in users toDo list', () => {

  beforeEach(() => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(users),
      }),
    );
  });
    
  beforeEach(() => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(toDo),
      }),
    );
  });


  test('Users with completed tasks', async() => {
    const result = await getCompletedTasks();

    expect(result).toStrictEqual([{
      id: 1,
      name: 'Van',
      toDo: [{
        userId: 1, title: 'Swimming', completed: true, 
      },{
        userId: 1, title: 'Coding', completed: true,
      }],
    }]);
  });


  test('Should called 2 times with correct links', async() => {
    await getCompletedTasks();

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });
});