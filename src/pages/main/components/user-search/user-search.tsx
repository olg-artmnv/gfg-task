import React, { useState} from 'react';
import {useHistory} from 'react-router';
import cn from 'classnames';

import {
    Button,
    Input,
} from '@ui-kit';

import './style.scss';

interface Props {
    userId: string;
}

export const UserSearch = ({userId}: Props) => {
    const {push} = useHistory();
    const [URI, setURI] = useState(userId);

    const handleClick = () => {
        push(URI)
    };

    return (
        <div className={cn('user-search')}>
            <Input
                value={URI}
                onChange={setURI}
                placeholder='Please insert github user name'
            />
            <div className={cn('user-search__search-button')}>
                <Button
                    label='Search'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
