import React from 'react';
import cn from 'classnames';

import './style.scss';

export const Loader = () => (
    <div className={cn('loader')}>
        <div className='loader__spinner' />
    </div>
);
