import React, {useContext} from 'react';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import {
    MainPage,
    SetToken,
} from '@pages'
import {UserContext} from '@contexts';
import {
    URL_HOME,
    URL_PAGE_SET_TOKEN,
    URL_USER,
} from '@urls';

export const App = (): JSX.Element => {
    const {token} = useContext(UserContext);

    return (
        <BrowserRouter>
            {token
                ? (
                    <Switch>
                        <Route
                            path={URL_USER}
                            component={MainPage}
                        />
                        <Redirect to={URL_HOME}/>
                    </Switch>
                ) : (
                    <Switch>
                        <Route
                            exact
                            path={URL_PAGE_SET_TOKEN}
                            component={SetToken}
                        />
                        <Redirect to={URL_PAGE_SET_TOKEN}/>
                    </Switch>
                )
            }
        </BrowserRouter>
    )
};
