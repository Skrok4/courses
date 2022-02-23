import { getCompletedTasks } from './index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

afterEach(() => fetch.mockClear());

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

describe('Added completed tasks in users toDo list', () => {
  test('Should return data with user completed tasks', async() => {

    fetch.mockReturnValueOnce({
      json: () => users,
    });

    fetch.mockReturnValueOnce({
      json: () => toDo,
    });
   

    const result = await getCompletedTasks();

    expect(result).toStrictEqual([{
      id: 1,
      name: 'Van',
      toDo: [{
        userId: 1, title: 'Swimming', completed: true, 
      },
      {
        userId: 1, title: 'Coding', completed: true,
      }],
    }]);
  });
});
