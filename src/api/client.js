import axios from 'axios';

const getGithubClient = () => {
  const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

const githubClient = getGithubClient();

export { githubClient };