import axios from 'axios';

export const getData = (url) => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => error);
};
export default getData;

export const getUsersWithPostAndComments = async () => {

  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const postsURL = 'https://jsonplaceholder.typicode.com/posts';
  const commentsURL = 'https://jsonplaceholder.typicode.com/comments';

  const users = await getData(usersURL);
  const posts = await getData(postsURL);
  const comments = await getData(commentsURL);

  return userList = users.map(user => {
    const userPosts = posts.filter(post => user.id === post.userId);

    const userPostAndComments = userPosts.map(post => {
      const commentsForPost = comments.filter((comment) => comment.postId === post.id);
      return { ...post, comments: commentsForPost };
    })

    user.posts = userPostAndComments;

    return user;
  });
};

//(async () => await getUsersWithPostAndComments())();
