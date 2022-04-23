import React, {SyntheticEvent} from 'react';
import cn from 'classnames';

import './style.scss';

interface Props {
    label: string;
    onClick: (event: SyntheticEvent) => void
}

export const Button = ({
    label,
    onClick,
}: Props) => {
    return (
        <button
            className={cn('button')}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
