import { githubClient } from './client';

function githubGetUserInfo(params = {}) {
  const { user } = params;

  return githubClient.get(`/users/${user}`);
}

export {
    githubGetUserInfo
  };