import {createContext} from 'react';

interface Props {
    token: string | null;
    saveToken: (token: string) => void;
    clearToken: () => void;
}

export const UserContext = createContext<Props>({
    token: null,
    saveToken: () => {},
    clearToken: () => {},
});
