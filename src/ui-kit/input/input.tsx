import React, {ChangeEvent} from 'react';
import cn from 'classnames';

import './style.scss';

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Input = ({
    value,
    onChange,
    placeholder,
}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    };

    return (
        <input
            className={cn('input')}
            onChange={handleChange}
            type='text'
            value={value}
            placeholder={placeholder}
        />
    );
};
