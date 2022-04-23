import {gql} from '@apollo/client';

interface FollowerConnection {
    totalCount: number;
}
interface Repository {
    name: string;
    url: string;
}


interface RepositoryEdge {
    node?: Repository;
}

interface RepositoryConnection {
    edges?: RepositoryEdge[];
    totalCount: number;
}

export interface User {
    avatarUrl: string;
    company?: string;
    email: string;
    followers: FollowerConnection;
    following: FollowerConnection;
    id: string;
    login: string;
    name?: string;
    repositories: RepositoryConnection;
    twitterUsername?: string;
    viewerIsFollowing: boolean;
}

export interface GetGithubUserByLogin {
    user: User;
}

export const GET_GITHUB_USER_BY_LOGIN = gql`
    query getGithubUserByLogin($login: String!) {
      user(login: $login) {
        ...on User {
          avatarUrl
          company
          email
          followers(first: 0) {
            totalCount 
          }
          following(first: 0) {
            totalCount 
          }
          id
          login
          name
          repositories(first: 100, isFork: false) {
          totalCount
            edges {
              node {
                name
                url
              }
            }
          }
          twitterUsername
          viewerIsFollowing
        }
      }
    }
`;

export const FOLLOW_GITHUB_USER = gql`
    mutation followGithubUser($repositoryId: ID!) {
        followUser(input:{userId: $repositoryId}) {
          user {
            id
          }
        }
    }
`;

export const UNFOLLOW_GITHUB_USER = gql`
    mutation unfollowGithubUser($repositoryId: ID!) {
        unfollowUser(input:{userId: $repositoryId}) {
          user {
            id
          }
        }
    }
`;

