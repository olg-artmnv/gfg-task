import React from 'react';
import ReactDOM from 'react-dom';

import {UserProvider} from '@contexts'

import {App} from './app';

import './styles/index.scss';

ReactDOM.render(
    <UserProvider>
        <App/>
    </UserProvider>,
    document.getElementById('app')
);
