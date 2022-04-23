import React from 'react';

import {User} from '@requests';
import {IconLink} from '@ui-kit';

type Props = Pick<User, 'repositories'>

export const UserRepositories = ({repositories}: Props) => {
    const {
        edges,
        totalCount,
    } = repositories;

    return (
        <div>
            <h3>{`Total: ${totalCount}`}</h3>
            {edges && edges.map(edge => {
                const {node} = edge;
                if (node) {
                    const {name, url} = node;

                    return (
                        <IconLink
                            href={url}
                            text={name}
                            key={url}
                        />
                    )
                }

                return null;
            })}
        </div>
    )
};

