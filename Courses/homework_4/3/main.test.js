import { getUsersWithPostAndComments } from './main'
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

const getUsersWithPostAndCommentsData = [
    {
        id: 1,
        name: 'Lionel Messi',
        email: 'Messi228@april.biz',
        posts: [
            {
                userId: 1, id: 1, title: 'I kill all head magnifier', comments: [
                    {
                        postId: 1,
                        id: 1,
                        name: 'Leonardo',
                    },
                ],
            },
        ],
    },
]

describe('getUsersWithPostAndComments() should take 3 object from links and create final object that consist data of three previous', () => {

    test('Test getUsersWithPostAndComments function', async () => {

        axios.mockImplementationOnce(() => Promise.resolve({ data: users }));
        axios.mockImplementationOnce(() => Promise.resolve({ data: posts }));
        axios.mockImplementationOnce(() => Promise.resolve({ data: comments }));

        const result = await getUsersWithPostAndComments();
        expect(result).toStrictEqual(getUsersWithPostAndCommentsData);
    });

    test('Axios should be called 3 times and return 3 objects', async () => {

        axios.mockImplementationOnce(() => Promise.resolve({ data: users }));
        axios.mockImplementationOnce(() => Promise.resolve({ data: posts }));
        axios.mockImplementationOnce(() => Promise.resolve({ data: comments }));

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
