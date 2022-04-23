import React, {
    useContext,
    useState,
} from 'react';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';

import {
    Button,
    Input,
} from '@ui-kit';
import {UserContext} from '@contexts';
import {URL_HOME} from '@urls';

import './style.scss';

export const SetToken = () => {
    const {push} = useHistory();
    const [tokenValue, setTokenValue] = useState("");
    const {saveToken} = useContext(UserContext);

    const handleClick = () => {
        saveToken(tokenValue);
        push(URL_HOME)
    };

    return (
        <div className={cn('set-token')}>
            <Input
                value={tokenValue}
                onChange={setTokenValue}
                placeholder='Please insert token'
            />
            <div className={cn('set-token__search-button')}>
                <Button
                    label='Set token'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
