import React from 'react';
import {useQuery} from '@apollo/client';
import cn from 'classnames';

import {
    GET_GITHUB_USER_BY_LOGIN,
    GetGithubUserByLogin,
} from '@requests';
import {Loader} from '@ui-kit';

import {
    UserInfo,
    UserRepositories,
} from './components';

import './style.scss';

interface Props {
    userId: string;
}

export const User = ({userId}: Props) => {
    const {loading, data, error, refetch} = useQuery<GetGithubUserByLogin>(GET_GITHUB_USER_BY_LOGIN, {
        variables: {
            login: userId,
        },
    });

    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <div className={cn('user--error')}>
                <div>An error occurred!</div>
                <div>Error text: {error.message}</div>
            </div>
        )
    }

    if (data) {
        const {
            avatarUrl,
            company,
            email,
            followers,
            following,
            id,
            login,
            name,
            repositories,
            twitterUsername,
            viewerIsFollowing,
        } = data.user;

        return (
            <div className={cn('user')}>
                <div>
                    <h2>User info: </h2>
                    <UserInfo
                        avatarUrl={avatarUrl}
                        company={company}
                        email={email}
                        followers={followers}
                        following={following}
                        id={id}
                        login={login}
                        refetchUserInfo={refetch}
                        name={name}
                        twitterUsername={twitterUsername}
                        viewerIsFollowing={viewerIsFollowing}
                    />
                </div>
                <div>
                    <h2>Repositories: </h2>
                    <UserRepositories repositories={repositories}/>
                </div>
            </div>
        );
    }

    return null;
};
