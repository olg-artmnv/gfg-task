import React, {useContext} from 'react';
import cn from 'classnames';

import {UserContext} from '@contexts';
import {Button} from '@ui-kit';

import './style.scss';

export const Token = () => {
    const {clearToken, token} = useContext(UserContext);

    return (
        <div className={cn('token')}>
            <div className={cn('token__info')}>
                Your github token is: {token}
            </div>
            <div className={cn('token__clear')}>
                <Button
                    onClick={clearToken}
                    label='Clear Token'
                />
            </div>
        </div>
    );
};
