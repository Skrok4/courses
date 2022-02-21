import { getUsersWithPostAndComments } from './main.js'
import axios from 'axios';
jest.mock('axios');

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(),
    }),
)

beforeEach(() => {
    axios.mockClear();
});

const users = [
    {
        id: 1,
        name: 'Lionel Messi',
        email: 'Messi228@april.biz',
    },
];

const posts = [
    {
        userId: 1,
        id: 1,
        title: 'I kill all head magnifier',
    },
];

const comments = [
    {
        postId: 1,
        id: 1,
        name: 'Leonardo',
    },
];
describe('Describe getUsersWithPostAndComments function', () => {
    test('Axios should be called 3 times and return 3 objects', async () => {

        axios.mockImplementtationOnce(() => Promise.resolve({ data: users }));
        axios.mockImplementtationOnce(() => Promise.resolve({ data: posts }));
        axios.mockImplementtationOnce(() => Promise.resolve({ data: comments }));

        await getUsersWithPostAndComments();

        expect(axios).toHaveBeenCalledTimes(3);

        expect(axios).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/users',
        );

        expect(axios).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/posts',
        );

        expect(axios).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/comments',
        );
    });
});


