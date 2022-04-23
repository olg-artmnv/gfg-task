import React, {useState} from 'react';

import {UserContext} from './user-context';

const TOKEN_KEY = 'token';

export const UserProvider = ({children}: any) => {
    const savedToken = localStorage.getItem(TOKEN_KEY);

    const [token, setToken] = useState<string | null>(savedToken);

    const clearToken = () => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null)
    };

    const saveToken = (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    };

    const context = React.useMemo(() => ({
        token,
        clearToken,
        saveToken,
    }), [token]);

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
};
