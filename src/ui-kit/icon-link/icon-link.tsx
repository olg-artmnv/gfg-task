import React from 'react';
import cn from 'classnames';

import './style.scss';

interface Props {
    href: string;
    text: string;
    iconSrc?: string;
}

export const IconLink = ({
    href,
    iconSrc,
    text,
}: Props) => {
    return (
        <div className={cn('icon-link')}>
            {iconSrc && (
                <img src={iconSrc} alt={text}/>
            )}
            <a href={href} target='_blank'>{text}</a>
        </div>
    );
};
