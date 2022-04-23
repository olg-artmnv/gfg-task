import React, {useContext} from 'react';
import {useParams} from 'react-router';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from '@apollo/client';
import cn from 'classnames';

import {UserContext} from '@contexts';

import {
    User,
    UserSearch,
    Token,
} from './components';

import './style.scss';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

interface Params {
    userId: string;
}

export const MainPage = () => {
    const {token} = useContext(UserContext);
    const {userId} = useParams<Params>();

    const client = new ApolloClient({
        uri: GITHUB_GRAPHQL_API,
        cache: new InMemoryCache(),
        headers: {
            authorization: `Bearer ${token}`,
        }
    });

    return (
        <div className={cn('main-page')}>
            <UserSearch userId={userId}/>
            <ApolloProvider client={client}>
                <User userId={userId}/>
            </ApolloProvider>
            <Token/>
        </div>
    );
};
